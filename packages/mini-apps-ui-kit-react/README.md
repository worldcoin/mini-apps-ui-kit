# @worldcoin/mini-apps-ui-kit-react

React components UI Kit library for Mini Apps

> **⚠️ Security Notice**: This library has not been reviewed for security vulnerabilities. Use in production environments is discouraged until a security audit has been completed.

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

The library uses the following font **[TWK Lausanne](https://weltkern.com/typefaces/lausanne)** as the sans-serif font for all text `(--font-sans)`. 

> **⚠️ License Notice**: TWK Lausanne is a commercial font that requires a license. Make sure you have obtained the appropriate license from [Weltkern](https://weltkern.com/typefaces/lausanne) before using it in your project.

By default, the library sets `--font-sans` to **TWK Lausanne**, but you can override this CSS variable to use any other font of your choice:

```css
:root {
  --font-sans: 'Your Font Name', sans-serif;
}
```

You must import the font in your application before using it. The library does not include the font files - you need to handle the font loading yourself according to your license agreement.

## Importing Styles

To use the UI Kit components with their proper styling, you need to import the styles in your application. Add the following import statement to your application's entry point (e.g., `app/layout.tsx` for Next.js or `main.tsx` for Vite):

```typescript
import "@worldcoin/mini-apps-ui-kit-react/styles.css";
```

## Import Methods

The library supports two different import methods:

### Default Import

Import components from the main entry point:

```typescript
import { Button } from "@worldcoin/mini-apps-ui-kit-react";
```

This method is simpler but includes all components in your bundle, even if you're not using them.

### Component-Level Import

Import components directly from their individual modules:

```typescript
import { Button } from "@worldcoin/mini-apps-ui-kit-react/Button";
```

This method enables tree-shaking and reduces your final bundle size by only including the components you actually use. Recommended for production applications where bundle size is a concern.

## Icons

The library uses [Hugeicons](https://hugeicons.com/) for its icon system. To use icons in your project, you'll need to install the [React package](https://www.npmjs.com/package/@hugeicons/react):

```bash
npm install @hugeicons/react
# or
yarn add @hugeicons/react
```

Then you can import and use icons in your components:

```jsx
import { HomeIcon } from '@hugeicons/react';

function MyComponent() {
  return <HomeIcon size={24} />;
}
```

Hugeicons provides a comprehensive set of icons across various categories including:
- Navigation & UI elements
- Social media
- Business & Finance
- Communication
- Technology
- And many more...

You can browse the complete icon set at [hugeicons.com](https://hugeicons.com/).

Hugeicons is available under various license options. Please refer to their [website](https://hugeicons.com/) for detailed licensing information. 