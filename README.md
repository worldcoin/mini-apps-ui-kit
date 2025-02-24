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

## Contributing

We use [changesets](https://github.com/changesets/changesets) to manage our versioning and changelogs. To contribute to this repository, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run `pnpm changeset` to create a changeset that describes your changes
   - This will prompt you to:
     - Select which packages you want to release
     - Choose the type of version bump (major, minor, patch)
     - Provide a summary of the changes
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

Make sure to:
- Follow the existing code style
- Update documentation as needed
- Add tests if applicable
- Include a changeset with your changes

## Version Management

Version management is handled by the repository's CODEOWNERS. They are responsible for:

- Reviewing and approving version bumps
- Managing the release process
- Ensuring changesets are properly created and maintained
- Publishing new versions of the packages

Only CODEOWNERS have the authority to merge version-related changes and execute releases.
