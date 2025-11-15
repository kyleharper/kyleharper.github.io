# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/blog (kyleharper.co.uk) built with Astro and deployed to Cloudflare Pages. The site uses MDX for blog posts and is styled with Tailwind CSS.

## Technology Stack

- **Framework**: Astro (v5) with Cloudflare adapter
- **UI**: Astro components with React support for interactive components
- **Styling**: Tailwind CSS with @tailwindcss/typography for blog content
- **Content**: MDX files managed via Astro Content Collections
- **Build Tool**: Vite (via Astro)
- **Linting/Formatting**: Biome
- **Deployment**: Cloudflare Pages via Wrangler
- **Package Manager**: pnpm

## Common Commands

### Development
```bash
pnpm dev                 # Start Astro dev server (localhost:4321)
```

### Building
```bash
pnpm build              # Type check and build for production
```

### Linting & Type Checking
```bash
pnpm check              # Run Biome linter and formatter (auto-fixes)
pnpm typecheck          # Run Astro type checking
```

### Deployment
```bash
pnpm deploy             # Build and deploy to Cloudflare Pages
pnpm preview            # Preview production build locally
```

## Architecture

### Directory Structure

- **src/**: Main application code
  - **pages/**: Astro pages and routes
    - `index.astro`: Homepage
    - `blog/[...slug].astro`: Dynamic blog post pages
  - **content/**: Content collections
    - `blog/`: Blog posts as MDX files (e.g., `sync-engines-part-one.mdx`)
    - `config.ts`: Content collection schemas
  - **layouts/**: Reusable layouts
    - `BaseLayout.astro`: Root HTML layout with fonts and global styles
    - `BlogLayout.astro`: Blog post wrapper with Header/Footer
  - **components/**: Reusable components
    - Astro components (`.astro`): Logo, Header, Footer, Hr, Link, etc.
    - React components (`.tsx`): Callout (for use in MDX)
  - **styles/**: Global styles
    - `global.css`: Tailwind CSS directives

- **public/**: Static assets served as-is

- **dist/**: Build output directory (gitignored)

### Blog Post System

Astro's Content Collections provide a type-safe way to manage blog posts:

1. **Content Definition**: Blog posts are MDX files in `src/content/blog/` with frontmatter:
   ```mdx
   ---
   title: 'Post Title'
   date: 'DD Mon YY'
   intro: 'Brief description'
   ---
   ```

2. **Schema**: Defined in `src/content/config.ts` using Zod for validation

3. **Rendering**: The `src/pages/blog/[...slug].astro` dynamic route:
   - Uses `getStaticPaths()` to generate routes from the blog collection
   - Renders each post using `BlogLayout.astro`

4. **Homepage Listing**: `src/pages/index.astro` uses `getCollection('blog')` to list all posts

### Component Architecture

- **Astro Components** (`.astro`): Used for static content and layouts. These are zero-JS by default and perfect for most UI components.

- **React Components** (`.tsx`): Used when components need to be imported in MDX files (like Callout). These are rendered as React islands.

- **MDX Support**: Blog posts can import and use React components via:
  ```mdx
  import { Callout } from '../../components/Callout';
  ```

### Styling Approach

- Tailwind CSS configured in `tailwind.config.ts`
- Content paths point to `src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}`
- Global styles in `src/styles/global.css` imported in `BaseLayout.astro`
- Blog content uses Tailwind Typography plugin with custom prose classes
- Component styling uses Tailwind utility classes inline

### Cloudflare Pages Integration

- Server-side rendering enabled via `@astrojs/cloudflare` adapter
- Output mode: `server` (allows dynamic rendering)
- `wrangler.toml` configures:
  - Project name: "kyleharper"
  - Build output: `./dist`
  - Compatibility date: 2024-06-05
- Deploy with `pnpm deploy` (builds then runs `wrangler pages deploy ./dist`)

### TypeScript Configuration

- Extends Astro's strict TypeScript config
- Path alias: `~/*` maps to `./src/*`
- JSX configured for React (`react-jsx`)

## Development Notes

- Astro handles CSS automatically - no need for separate CSS build steps
- Content Collections provide type safety and validation for blog posts
- New blog posts: Just add MDX files to `src/content/blog/` - they'll be auto-discovered
- The site uses server-side rendering for flexibility, but could be switched to static generation by changing output mode to "static" in `astro.config.mjs`
- Biome is configured to auto-fix on `pnpm check`, with `useConst` rule disabled
- TypeScript is in strict mode
