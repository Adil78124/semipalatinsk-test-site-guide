/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Windows dev-mode ENOENT/missing-chunk issues are often caused by
    // filesystem cache getting into an inconsistent state (antivirus/OneDrive/abrupt restarts).
    // Disabling webpack cache in dev makes rebuilds slower but far more stable.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
