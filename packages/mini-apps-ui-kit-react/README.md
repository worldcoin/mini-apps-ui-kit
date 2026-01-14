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

To use the UI Kit components with their proper styling, you need to import the styles in your application. Add the following import statement to your application's entry point (e.g., `app/layout.tsx` for Next.js or `main.tsx` for Vite):

```typescript
import "@worldcoin/mini-apps-ui-kit-react/styles.css";
```

## Icons

The library includes a custom set of React icon components generated from SVG files. Icons are available in three variants: `outline`, `regular`, and `solid`.

### Using Icons from the Package

You can import icons directly from the package:

```tsx
// Import from the main icons entry (defaults to outline variant)
import { Airplane, Check, Home, Settings } from "@worldcoin/mini-apps-ui-kit-react/icons";

function MyComponent() {
  return (
    <div>
      <Airplane />
      <Check />
      <Home />
      <Settings />
    </div>
  );
}
```

### Importing Specific Variants

You can also import icons from specific variant entry points:

```tsx
// Import outline variant icons
import { Airplane, Check } from "@worldcoin/mini-apps-ui-kit-react/icons/outline";

// Import regular variant icons
import { Airplane as AirplaneRegular, Check as CheckRegular } from "@worldcoin/mini-apps-ui-kit-react/icons/regular";

// Import solid variant icons
import { Airplane as AirplaneSolid, Check as CheckSolid } from "@worldcoin/mini-apps-ui-kit-react/icons/solid";

function MyComponent() {
  return (
    <div>
      <Airplane /> {/* outline variant */}
      <AirplaneRegular /> {/* regular variant */}
      <AirplaneSolid /> {/* solid variant */}
    </div>
  );
}
```

### Icon Props

All icons accept standard React SVG props and can be customized:

```tsx
import { Home } from "@worldcoin/mini-apps-ui-kit-react/icons";

function MyComponent() {
  return (
    <div>
      {/* Default size (1.5em) */}
      <Home />
      
      {/* Custom size */}
      <Home width={24} height={24} />
      
      {/* Custom color using className */}
      <Home className="text-blue-500" />
      
      {/* Custom styling */}
      <Home style={{ color: "red", width: 32, height: 32 }} />
    </div>
  );
}
```

### Default Icon Props

Default values for the most common props are given below:

| Prop name | Default value |
|-----------|---------------|
| `color` | `"currentColor"` |
| `width` | `"1.5em"` |
| `height` | `"1.5em"` |
| `strokeWidth` | `"2"` (outline variant only) |

**Note:** The `strokeWidth` prop is only applicable to outline variant icons and defaults to `"2"` (2px). Regular and solid variants do not use `strokeWidth` as they are filled icons.

### Available Icons

The package includes 400+ icons across three variants. Icons are named in PascalCase (e.g., `arrow-down.svg` becomes `ArrowDown`). To see all available icons, check the `icons/` directory in the package.


```bash
npm install iconoir-react
# or
yarn add iconoir-react
```

Then you can import and use icons:

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