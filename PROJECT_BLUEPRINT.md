# KUMKAPI WEB PROJECT BLUEPRINT
> **FOR THE USER:** Please COPY this file content or this file itself into your new `kumkapi-web` folder. If you start a new chat, ask the AI to "Read the PROJECT_BLUEPRINT.md file".

## 1. Design System
We have extracted these exact values from your existing `index.html`.

### Color Palette (Tailwind)
```javascript
colors: {
  primary: "#c5a059", // Gold/Copper accent (Verified from Logo)
  "background-light": "#f8f5f0", // Soft cream for Light Mode
  "background-dark": "#0a0a0a",  // Deep black for Dark Mode
  "card-dark": "#141414",         // Slightly lighter black for cards
  "border-dark": "#2a2a2a",       // Subtle borders
}
```

### Typography (Google Fonts)
*   **Headings/Display:** `Cinzel` (Serif, majestic)
*   **Body Copy:** `Montserrat` (Sans-serif, clean)
*   **Accents/Script:** `Pinyon Script` OR `Great Vibes` (Cursive, elegant)
*   **Alternate Serif:** `Playfair Display`

### UI Elements
*   **Icons:** Material Symbols Outlined
*   **Rounded Corners:** `DEFAULT: "0.25rem"` (4px)
*   **Gradients:**
    *   `hero-gradient`: `linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 1) 100%)`
    *   `gold-border`: `linear-gradient(to right, transparent, #c5a059, transparent)`

## 2. Asset Checklist
Ensure these files are in your `public/images` folder in the new Next.js project:

*   [ ] `logo.jpg` (The brand identity)
*   [ ] `restaurant-interior-1.jpg`
*   [ ] `restaurant-interior-2.jpg`
*   [ ] `restaurant-interior-3.jpg`
*   [ ] `menu-decor-1.png` (Generated seafood platter)
*   [ ] `menu-decor-2.png` (Generated grilled fish)
*   [ ] `restaurant-signage.jpg`

## 3. Menu Data Structure
(already extracted to `menu-data.js`, summary below)
*   **Categories:** Soups, Salads, Cold Appetizers, Hot Appetizers, Pasta, Fish.
*   **Format:** JSON with `id`, `name`, `price`, `description`.

## 4. Architecture (Next.js App Router)
*   `app/layout.js` -> Contains `Navbar` and `Footer`.
*   `app/page.js` -> Homepage (Hero, Story, Gallery).
*   `app/menu/page.js` -> Menu Page (Uses `menu-data.js` and `MenuSection` component).
*   `app/checkout/page.js` -> Checkout logic (Context API).

## 5. Critical Features
*   [ ] **Dark Mode:** Must parse `class="dark"` on `html` tag.
*   [ ] **Shopping Cart:** Must persist to `localStorage`.
*   [ ] **Reservations:** Integration with n8n Webhook.
