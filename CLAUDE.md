# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pioneer Artificial Intelligence Academy website - a static HTML/CSS marketing site hosted on GitHub Pages at pioneeracademy.ai.

## Development

This is a pure static website with no build process. To develop locally:

```bash
# Serve locally (any static file server works)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

No npm, no bundler, no framework - just edit HTML/CSS files directly.

## Architecture

**File Structure:**
- `index.html` - Main landing page
- `faculty.html` - Faculty/team profiles
- `partners.html` - Partners page
- `dallan.html` - Individual profile page
- `main.css` - Single shared stylesheet for all pages
- `images/` - Hero images, logos, team photos
- `assets/` - Additional media assets

**Styling System:**
All pages share `main.css` which uses CSS variables for theming:
- Primary: `#2A9D8F` (teal)
- Secondary: `#264653` (dark blue)
- Accent: `#E9C46A` (gold)
- Font: Poppins (Google Fonts)

The CSS includes 12 media query breakpoints for responsive design. Mobile navigation uses a CSS-based hamburger menu.

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment. The `CNAME` file configures the custom domain.
