# Design System Document: Geoecological Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Cartographer"
This design system moves away from the generic "travel blog" aesthetic toward a high-end, editorial experience. It is inspired by the precision of scientific journals and the immersive storytelling of National Geographic. We treat the interface not as a collection of boxes, but as a sophisticated, layered map of East Kazakhstan’s ecological wonders.

**The Editorial Shift:** 
To achieve a "Scientific & Reliable" feel, we reject standard web grids in favor of intentional asymmetry. We use expansive white space (the "Breathing Room") to signal luxury and authority. Elements should feel like they are "resting" on the landscape rather than being trapped in containers.

---

## 2. Colors & Surface Philosophy

The palette is rooted in the "Geoecological" mission—utilizing deep forest greens and mineral greys to establish trust.

### Color Tokens
*   **Primary (The Forest Core):** `#0d631b` (Primary) / `#2e7d32` (Primary Container). Used for active states and high-authority callouts.
*   **Secondary (The Flora):** `#126d27` (Secondary). Used for supporting ecological data and accent markers.
*   **Tertiary (The Earth):** `#923357` (Tertiary). Reserved for scientific highlights or contrasting geological data points.
*   **Background:** `#f8faf9` (Off-white/Light Grey).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. In this system, boundaries are defined by "Tonal Shifting." 
*   Separate a sidebar from a main feed by moving from `surface` (#f8faf9) to `surface-container-low` (#f2f4f3). 
*   The human eye perceives the change in value as a structural boundary, creating a cleaner, more premium look than a "drawn" line.

### Glass & Gradient Signature
To avoid a flat, "government form" look, use **Glassmorphism** for floating navigation and map overlays:
*   **Token:** `surface` at 70% opacity with a `20px` backdrop-blur.
*   **CTA Gradient:** Use a subtle linear gradient from `primary` (#0d631b) to `primary-container` (#2e7d32) at 135° to give buttons a "gem-like" depth.

---

## 3. Typography: The Authority Scale

We utilize a dual-font approach to balance scientific precision with modern readability.

*   **Display & Headlines (Manrope):** A geometric sans-serif that feels engineered and modern. 
    *   *Role:* Establishes the "Editorial" voice. Use `display-lg` (3.5rem) for hero titles to command attention.
*   **Body & Labels (Inter):** A highly legible workhorse font.
    *   *Role:* Conveys "Reliability." Use `body-md` (0.875rem) for data descriptions and research notes.

**Hierarchy as Identity:** 
Always pair a `label-md` (All Caps, letter-spaced +10%) with a `headline-sm` to create a "Documentary" feel. The label acts as the "Classification" (e.g., ALTAY MOUNTAINS) while the headline acts as the "Subject" (e.g., Glacial Retreat Analysis).

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "software-heavy" for a nature-focused site. We use **Ambient Depth**.

### The Layering Principle
Stack tiers to create hierarchy:
1.  **Level 0 (Base):** `surface` (#f8faf9)
2.  **Level 1 (Sectioning):** `surface-container-low` (#f2f4f3)
3.  **Level 2 (Cards/Content):** `surface-container-lowest` (#ffffff)

### Ambient Shadows
When an element must float (e.g., a map tooltip), use a "Botanical Shadow":
*   **Color:** `on-surface` (#191c1c) at 6% opacity.
*   **Blur:** 32px.
*   **Y-Offset:** 8px.
This creates a soft lift that mimics natural, overcast light found in the Kazakh wilderness.

### The "Ghost Border"
If a container sits on a background of the same color, use a "Ghost Border": `outline-variant` (#bfcaba) at **15% opacity**. It provides just enough definition for accessibility without breaking the "No-Line" rule.

---

## 5. Components

### Buttons
*   **Primary:** Rounded-xl (1.5rem), Primary-to-Primary-Container gradient, `on-primary` text.
*   **Secondary:** Ghost style. No background, `outline-variant` (20% opacity) border, `primary` text.
*   **States:** On hover, increase the surface elevation by shifting from `surface-container-lowest` to a `surface-bright`.

### Scientific Cards
*   **Layout:** No dividers. Use `spacing-6` (2rem) between header and body.
*   **Visual:** Cards should use `rounded-lg` (1rem). 
*   **Header:** Place a `label-sm` in `secondary` text color above the title to categorize the geo-data.

### Input Fields
*   **Style:** Minimalist underline or soft-filled. Use `surface-container-high` for the input background.
*   **Focus:** A 2px `primary` bottom border only. No full-box focus rings.

### Custom Component: The "Geo-Status" Badge
Used for ecological risk levels.
*   **Safe:** `primary-fixed` background with `on-primary-fixed` text.
*   **Moderate:** Yellow/Gold (Warning tokens) with a soft glass blur.
*   **Danger:** `error-container` background with `on-error-container` text.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-10`, try a right margin of `spacing-20` for editorial layouts.
*   **Do** use high-quality, desaturated photography. The UI is the frame; the landscape of East Kazakhstan is the art.
*   **Do** use `rounded-full` for chips and status indicators to contrast the `rounded-lg` cards.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Always use `on-surface` (#191c1c) to maintain a natural, softer contrast.
*   **Don’t** use 1px lines to separate list items. Use a `0.5rem` background shift or simply increased vertical padding (`spacing-4`).
*   **Don’t** crowd the interface. If you feel like you need a divider, you probably just need more `spacing-8`.

---

## 7. Spacing Scale Reference
*   **Tight (Labels/Captions):** `spacing-1.5` (0.5rem)
*   **Standard (Paragraphs):** `spacing-4` (1.4rem)
*   **Sectional (Large Breaks):** `spacing-12` (4rem)
*   **Hero (Immersion):** `spacing-24` (8.5rem)

*Apply these tokens to margins and padding to ensure a mathematical rhythm across the "Digital Cartographer" experience.*