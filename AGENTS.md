# AGENTS.md / CLAUDE.md

This file provides guidance to Claude Code and OpenCode when working with code in this repository.

## Project Overview

This is a resume/CV website built with Next.js 16 and React 19 that generates static pages from YAML data files. The application supports multiple resume variants (e.g., "full-stack", "drupal-specialist") with internationalization through separate YAML files per locale.

## Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Build & Production
npm run build        # Build static site (output: "export" mode)
npm start            # Start production server (after build)

# Code Quality
npm run lint         # Run ESLint on all files
npm run type-check   # Validate TypeScript types
```

## Architecture

### Dynamic Routing with Static Generation

The app uses Next.js catch-all routes (`[...slug]/page.tsx`) combined with static generation to build multiple resume pages at build time:

- Route pattern: `[...slug]` matches any URL path (e.g., `/full-stack`, `/drupal-specialist/pt-br`)
- `generateStaticParams()` in `src/app/[...slug]/page.tsx:62` discovers all available resume slugs from the `data/` directory
- At build time, Next.js generates static HTML for each discovered resume variant

### Resume Discovery System

The resume discovery logic in `src/config/resumes.ts` automatically scans the `data/` directory:

- Each subdirectory in `data/` represents a resume variant (e.g., `data/full-stack/`, `data/drupal-specialist/`)
- Files named `en.yaml` map to the variant root (e.g., `/full-stack` → `data/full-stack/en.yaml`)
- Other locale files map to variant + locale paths (e.g., `/full-stack/pt-br` → `data/full-stack/pt-br.yaml`)
- Discovery happens at build time, so new resume variants require a rebuild

### Data Flow

1. YAML files in `data/*/` define resume content matching the `ResumeData` interface from `src/types/resume.ts`
2. `getData()` in `src/app/[...slug]/page.tsx:22` loads and parses YAML using `js-yaml`
3. Parsed data is passed to section components (`ResumeHeader`, `AboutSection`, `ExperienceSection`, etc.)
4. Each section component renders specific parts of the resume data

### Path Aliases

TypeScript paths are configured in `tsconfig.json:26`:
- `@/*` → `./src/*` (components, types, config)
- `@data/*` → `./data/*` (YAML files)

### Styling

- **Tailwind CSS v4** for utility-first styling
- **Print-optimized styles**: Special classes like `print:text-[14px]`, `print:leading-snug` for PDF export
- **Custom CSS Module**: `src/app/[...slug]/page.module.css` for page-specific styles
- **Font**: Roboto from Google Fonts, applied at the page level

### Components Structure

All resume components are in `src/components/resume/`:
- Each section component (e.g., `ExperienceSection`, `EducationSection`) receives typed props from `src/types/resume.ts`
- Components use Lucide React icons for visual elements (Calendar, MapPin, etc.)
- `PrintButton` component provides browser print functionality

## Key Implementation Details

### Adding a New Resume Variant

1. Create a new directory in `data/` (e.g., `data/frontend-specialist/`)
2. Add at least one YAML file following the `ResumeData` schema (e.g., `en.yaml`)
3. Run `npm run build` to generate static pages
4. The new variant will be available at `/{directory-name}` for `en.yaml` or `/{directory-name}/{locale}` for other locales

### Modifying Resume Schema

If changing the data structure in YAML files:
1. Update TypeScript interfaces in `src/types/resume.ts`
2. Update corresponding section components in `src/components/resume/`
3. Verify changes work across all resume variants in `data/`

### Static Export Configuration

The project is configured for static export (`output: "export"` in `next.config.js:3`), which means:
- No server-side runtime features (API routes, ISR, etc.)
- All pages must be known at build time via `generateStaticParams()`
- Built files in `.next/` can be served from any static host

### Google Analytics

Analytics are conditionally loaded only in production (see `src/app/layout.tsx:14`). The tracking ID is embedded but excluded from localhost.

## Testing

After finished a task, you should validate your changes by:
1. Running `npm run lint` to ensure code quality standards are met
2. Running `npm run type-check` to ensure TypeScript types are valid
3. Running `npm run build` to ensure static generation works without errors
