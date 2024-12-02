# mini-apps-ui-kit

Mini apps UI Kit repo

## Getting Started

```bash
# Install dependencies
pnpm install
```

```bash
# Run Storybook in dev mode
pnpm dev:sb
```

```bash
# Run Next.js example app in dev mode without hot reload
pnpm dev
```

```bash
# Build components library for production
pnpm build
```

```bash
# Build Storybook for production
pnpm build:sb
```

```bash
# Preview built Storybook in production mode (after pnpm build:storybook)
pnpm preview:sb
```

## Files Structure

- `packages/@mini-apps-ui-kit-react`: React components library
- `packages/@mini-apps-ui-kit-react/src/components`: React components, make sure every component has it's own index.ts file
- `packages/@mini-apps-ui-kit-react/stories`: Storybook stories
