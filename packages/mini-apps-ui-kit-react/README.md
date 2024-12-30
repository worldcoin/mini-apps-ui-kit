# @mini-apps-ui-kit/react

React components UI Kit library for Mini Apps

## Getting Started

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind Configuration

- `./styles/globals.css`: is the main entrypoint for the tailwind css styles
- `./public/globals.css`: compiled tailwind css styles
- `./src/tailwind`: tailwind plugin with uiKit tailwind presets

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Font Configuration

The library uses three fonts:

- **Rubik** as the sans-serif font for body text and subtitles `(--font-sans)`
- **Sora** as the display font for headings and numbers `(--font-display)`
- **SF Mono** as the monospace font `(--font-mono)`

You can override any of these fonts by setting the CSS variables in your application:

```css
:root {
  --font-sans: "Font", sans-serif;
  --font-display: "Font", sans-serif;
  --font-mono: "Font", monospace;
}
```

Embed the following code in the `<head>` of your html to load Sora and Rubik:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap"
  rel="stylesheet"
/>
```

Or use the following code to load the fonts via CSS:

```css
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap");
```

For SF Mono, you'll need to obtain it from Apple's developer resources as it's not freely available. You can download it from [Apple's developer fonts page](https://developer.apple.com/fonts/).

## Spacing System

The library follows a consistent 4px-based spacing system for uniform padding, margins, and layout spacing. This ensures better scalability and alignment across different components.

### Available Spacing Tokens

- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- xxl: 3rem (48px)

### Usage in Tailwind CSS

These spacing tokens are mapped in the Tailwind configuration and can be used directly in your components, such as `p-md` and `m-sm`.

```html
<div className="p-md">Content with 16px padding</div>
```

### Spacing Recommendations

- **Main paddings**: It is recommended to use a default padding of `24px `to ensure ample breathing room around elements and maintain a clean, structured appearance.

- **Sections**: It is recommended to set the default space between sections to `40px` to create clear separation between distinct areas of content. For subheadlines and their associated content, a spacing of `24px` is advised to maintain a visual connection between headers and their content.

- **Button**: It is recommended to position buttons with a `24px` space from the iOS bottom bar to ensure optimal accessibility and provide a comfortable tap area.

- **Button with active keyboard**: It is recommended to place buttons `24px` above the active keyboard to keep them easily accessible and visually distinct, preventing accidental taps or overlap when the keyboard is active.

- **States**: It is recommended to use middle alignment to ensure consistency across various screen sizes and component states. This approach helps create a polished and intentional interface, particularly effective for empty states, loading indicators, or other transient states, ensuring a seamless and cohesive user experience.

- **Bottom menu**: It is recommended to position the bottom menu with a `20px` padding from the iOS bottom bar to create a comfortable buffer that enhances touch accessibility and aligns with native iOS design guidelines. Additionally, a minimum padding of `8px` from the top of the menu is advised to provide necessary breathing room.
