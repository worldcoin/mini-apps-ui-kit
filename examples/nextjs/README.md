# Mini Apps UI Kit - Next.js Example

This is an example [Next.js](https://nextjs.org) application showcasing the implementation and usage of the `@worldcoin/mini-apps-ui-kit-react` package. This project demonstrates how to integrate and utilize the UI components in a real-world Next.js application.

## Features

- 🎨 Modern, responsive UI components
- 🚀 Built with Next.js 14
- 🎯 TypeScript support

## Prerequisites

- Node.js 18.17 or later
- pnpm (recommended), npm, yarn, or bun

## Getting Started

1. Clone the repository
2. Navigate to the example directory:
   ```bash
   cd examples/nextjs
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Setting up the UI Kit

To use the `@worldcoin/mini-apps-ui-kit-react` in your Next.js application, follow these steps:

1. **Import Required Fonts**

   In your `app/layout.tsx`, import and configure the required fonts:

   ```typescript
   import { DM_Mono, Rubik, Sora } from "next/font/google";

   const rubik = Rubik({
     subsets: ["latin"],
     weight: ["300", "400", "500", "600", "700", "800", "900"],
     style: ["normal", "italic"],
     variable: "--font-sans",
   });

   const sora = Sora({
     subsets: ["latin"],
     weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
     variable: "--font-display",
   });

   const dmMono = DM_Mono({
     weight: ["300", "400", "500"],
     subsets: ["latin"],
     variable: "--font-mono",
   });
   ```

   Apply the fonts in your layout's HTML:

   ```typescript
   <html lang="en" className={`${rubik.className} ${sora.className} ${dmMono.className}`}>
   ```

2. **Import UI Kit Styles**

   Add the UI Kit's CSS by importing it in your `app/layout.tsx`:

   ```typescript
   import "@worldcoin/mini-apps-ui-kit-react/styles.css";
   ```

3. **Configure Tailwind**

   Update your `tailwind.config.ts` to include the UI Kit's plugin:

   ```typescript
   import { uiKitTailwindPlugin } from "@worldcoin/mini-apps-ui-kit-react";

   export default {
     // ... other config options
     plugins: [uiKitTailwindPlugin],
   };
   ```

   Make sure your content array includes the UI Kit's path:

   ```typescript
   content: [
     // ... other paths
     "./node_modules/mini-apps-ui-kit/**/*.{js,ts,jsx,tsx}",
   ],
   ```

## Available Components

The UI Kit provides a variety of components that you can use in your application. Check out the main documentation for a complete list of components and their usage.
