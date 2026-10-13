# Развёртывание STS Nuclear-Tour на Linux-сервере

## 1. Архитектура

STS Nuclear-Tour — серверное приложение Next.js 14 с App Router. Интерфейс использует React 18, TypeScript и Leaflet. Язык RU/KZ/EN сохраняется в cookie `geoed.lang` и `localStorage`; из-за чтения cookie страницы рендерятся сервером по запросу.

Приложение:

- не использует базу данных, Redis, очереди или постоянное файловое хранилище;
- отдаёт изображения, PDF и JSON-маршруты из `public`;
- получает картографические тайлы в браузере пользователя от OpenStreetMap, OpenTopoMap, CARTO и Esri;
- содержит внешние ссылки Google Maps, но не использует Google Maps API или API-ключ;
- собирается в Next.js standalone runtime и запускается командой `node server.js`.

Существующий Vercel deployment остаётся независимым: `output: "standalone"` не меняет домен и не требует удаления Vercel-конфигурации.

## 2. Системные требования

- Linux `amd64` или `arm64`;
- Docker Engine 24+ с Compose plugin v2;
- для сборки: 2 vCPU и 4 GiB RAM рекомендуется;
- для работы при небольшой нагрузке: 1–2 vCPU и 1 GiB RAM рекомендуется;
- не менее 2 GiB свободного диска, 5 GiB рекомендуется для сборочного кэша, логов и обновлений;
- исходящий HTTPS-доступ клиентов к тайловым сервисам карт;
- входящий TCP 80/443 для reverse proxy.

Контейнер слушает порт `3000`. Compose по умолчанию публикует его только на `127.0.0.1:3000`, поэтому внешний доступ должен проходить через reverse proxy.

Проверенная версия Node.js — 22.x. В Docker используется официальный образ `node:22-bookworm-slim`. Образ может собираться для `linux/amd64` и `linux/arm64`; сборку следует выполнять на целевой архитектуре либо через Docker Buildx.

## 3. Подготовка Docker

На Debian/Ubuntu установите Docker Engine и Compose plugin по официальной инструкции Docker. Проверьте:

```bash
docker version
docker compose version
docker info
```

Пользователь, выполняющий развёртывание, должен иметь право обращаться к Docker daemon. Не публикуйте Docker socket в сеть.

## 4. Установка из GitHub

```bash
git clone https://github.com/Adil78124/semipalatinsk-test-site-guide.git
cd semipalatinsk-test-site-guide
cp .env.example .env
```

При необходимости измените только локальный порт в `.env`:

```dotenv
STS_IMAGE=sts-nuclear-tour:local
STS_HOST_PORT=3000
```

Секреты приложению сейчас не нужны. Не добавляйте токены GitHub, TLS-ключи или другие секреты в Docker image и Git.

## 5. Сборка и запуск

Одна команда для сборки и запуска:

```bash
docker compose up -d --build
```

Более строгий первый запуск с обновлением базового образа:

```bash
docker compose build --pull
docker compose up -d
```

Проверка состояния:

```bash
docker compose ps
docker inspect --format '{{json .State.Health}}' sts-nuclear-tour-sts-nuclear-tour-1
curl --fail --show-error http://127.0.0.1:3000/
```

Имя контейнера зависит от имени каталога/Compose project. Надёжнее получать его так:

```bash
CONTAINER_ID=$(docker compose ps -q sts-nuclear-tour)
docker inspect --format '{{json .State.Health}}' "$CONTAINER_ID"
```

Остановка и повторный запуск:

```bash
docker compose stop
docker compose start
```

Полное удаление контейнера и сети без удаления образа:

```bash
docker compose down
```

Постоянные volumes не используются, поскольку приложение не хранит изменяемые данные.

## 6. Логи и healthcheck

```bash
docker compose logs --tail=200 sts-nuclear-tour
docker compose logs -f sts-nuclear-tour
docker compose ps
curl -I http://127.0.0.1:3000/
```

Healthcheck обращается к `/` внутри контейнера каждые 30 секунд. Логи используют Docker driver `local` с ограничением 10 MB на файл и тремя файлами.

## 7. Обновление

Перед обновлением сохраните текущий SHA или тег:

```bash
git rev-parse HEAD
docker image inspect "${STS_IMAGE:-sts-nuclear-tour:local}" --format '{{.Id}}'
```

Для обновления из GitHub:

```bash
git fetch origin
git pull --ff-only
docker compose build --pull
docker compose up -d
```

После обновления дождитесь статуса `healthy`, проверьте главную страницу, `/map?mode=routes`, `/maps`, `/methodology`, изображения и PDF. Старый образ не удаляйте до завершения проверки.

## 8. Откат

Предпочтительный способ — разворачивать подписанный тег или точный SHA. Для отката исходников:

```bash
git fetch --tags origin
git checkout <PREVIOUS_TAG_OR_SHA>
docker compose build
docker compose up -d
```

Если используется GHCR, установите в `.env` предыдущий неизменяемый тег или digest и выполните:

```bash
docker compose pull
docker compose up -d --no-build
```

Не используйте плавающий тег `latest` как единственную точку отката.

## 9. Резервное копирование

Пользовательских данных и базы данных нет. Для восстановления достаточно:

- Git-тега/SHA релиза или digest Docker image;
- серверного `.env`;
- конфигурации Nginx;
- TLS-сертификатов и ключей согласно политике организации;
- DNS-записей и внутренней документации эксплуатации.

Каталоги `.next`, `node_modules` и Docker build cache резервировать не требуется.

## 10. Nginx, HTTPS и DNS

Пример reverse proxy без выдуманного домена:

```nginx
server {
    listen 80;
    server_name <YOUR_DOMAIN>;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

После проверки HTTP настройте сертификат средствами организации или Certbot и перенаправление HTTP → HTTPS. В DNS создайте `A`/`AAAA` запись домена на публичный адрес reverse proxy. Не открывайте порт 3000 во внешнюю сеть.

## 11. Доставка через GHCR

### Вариант A — сборка на сервере

Администратор клонирует репозиторий и выполняет:

```bash
docker compose up -d --build
```

Преимущества: минимум внешней инфраструктуры. Недостатки: серверу нужны ресурсы для сборки и доступ к npm registry.

### Вариант B — версионированный образ GHCR

GitHub Actions собирает образ и публикует теги SHA/релиза в `ghcr.io/<OWNER>/<IMAGE>`. На сервере в `.env` указывается точный тег либо digest:

```dotenv
STS_IMAGE=ghcr.io/<OWNER>/<IMAGE>@sha256:<DIGEST>
STS_HOST_PORT=3000
```

Затем:

```bash
docker compose pull
docker compose up -d --no-build
```

Workflow публикации намеренно не активирован. При его добавлении нужны минимальные разрешения `contents: read` и `packages: write`; секреты должны храниться только в GitHub Actions secrets. Для production следует публиковать неизменяемый SHA-тег и фиксировать digest.

## 12. Типовые ошибки

- `Cannot connect to the Docker daemon`: запустить Docker Engine и проверить права пользователя.
- Контейнер `unhealthy`: проверить `docker compose logs`, затем HTTP-ответ внутри контейнера.
- Карта без подложки: проверить исходящий HTTPS/DNS-доступ клиента к OpenStreetMap, OpenTopoMap, CARTO и Esri; данные интерфейса при этом могут работать.
- Изображение или PDF возвращает 404: проверить, что `public` скопирован в runtime image и имя файла учитывает регистр Linux.
- `EADDRINUSE`: изменить `STS_HOST_PORT` либо освободить `127.0.0.1:3000`.
- Ошибка сборки на ARM: выполнять сборку на `linux/arm64` или использовать Buildx с соответствующей платформой.
- Нехватка памяти при `next build`: увеличить RAM/Swap; рекомендуется 4 GiB на время сборки.
