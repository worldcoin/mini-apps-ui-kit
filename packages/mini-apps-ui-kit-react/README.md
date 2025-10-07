# @worldcoin/mini-apps-ui-kit-react

React components UI Kit library for Mini Apps

> **⚠️ Security Notice**: This library has not been reviewed for security vulnerabilities. Use in production environments is discouraged until a security audit has been completed.

## Getting Started

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs**/**vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind **Configuration**

- `./**styles**/globals.css`: is the main entrypoint for the tailwind css styles
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

## Font

The library uses the following font **[TWK Lausanne](https://weltkern.com/typefaces/lausanne)** as the sans-serif font for all text `(--font-sans)`. 

> **⚠️ License Notice**: TWK Lausanne is a commercial font that requires a license. Make sure you have obtained the appropriate license from [Weltkern](https://weltkern.com/typefaces/lausanne) before using it in your project.


## Importing Styles

To use the UI Kit components with their proper styling, you need to import the styles in your application. The library provides multiple CSS files for maximum compatibility:

### **Tailwind v3 Projects (Recommended for most users)**
```typescript
import "@worldcoin/mini-apps-ui-kit-react/styles.css";
// or explicitly
import "@worldcoin/mini-apps-ui-kit-react/styles-v3.css";
```

### **Tailwind v4 Projects**
```typescript
import "@worldcoin/mini-apps-ui-kit-react/styles-v4.css";
```

### **CSS File Differences**

- **`styles.css`** - Backward-compatible version (same as v3, recommended for most users)
- **`styles-v3.css`** - Explicitly marked v3-compatible version
- **`styles-v4.css` - Modern v4 version with @layer directives

### **Why Multiple Versions?**

This library supports both Tailwind v3 and v4 to ensure maximum compatibility across different projects. The v3 versions work in any project, while the v4 version provides modern CSS features for projects that can use them.

> **💡 Tip**: If you're unsure which version to use, start with `styles.css` - it's designed to work everywhere.

## Icons

The library uses a custom set of icons built on top of [Iconoir](https://iconoir.com/). While we provide our own custom set, we highly recommend using Iconoir directly for your miniapps as it offers a comprehensive and well-maintained icon system.

To use Iconoir in your project, you'll need to install the [React package](https://www.npmjs.com/package/iconoir-react):

```bash
npm install iconoir-react
# or
yarn add iconoir-react
```

Then you can import and use icons in your components:

```jsx
import { Home } from 'iconoir-react';

function MyComponent() {
  return <Home width={24} height={24} />;
}
```

Iconoir provides a comprehensive set of 1,600+ unique SVG icons, designed on a 24x24 pixels grid. The icons are:
- 100% free and open source
- Available in SVG, React, React Native, Flutter, Figma and Framer
- Optimized for performance
- Customizable with different sizes, colors, and styles

You can browse the complete icon set at [iconoir.com](https://iconoir.com/).

Iconoir is available under the MIT License. Please refer to their [website](https://iconoir.com/) for more details. 