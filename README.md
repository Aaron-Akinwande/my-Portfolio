# Aaron Akinwande-Ajose: portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is statically generated.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

`npm run build` creates the production build, `npm run start` serves it, `npm run lint` runs ESLint, and `npm run check:contrast` checks the colour tokens.

## Environment variables

| Name | Purpose |
| --- | --- |
| `SITE_URL` | Public origin, used for canonical URLs, the sitemap and social cards. Falls back to Netlify's `URL`. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service for the contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Where things live

- `src/content/`: all copy and lists (site details, projects, experience, skills). Edit here to change what the site says.
- `src/app/`: the pages. Home, `projects/`, `projects/[slug]/` (one page per entry in `src/content/projects.ts`), `about/` and `contact/`.
- `src/components/sections/`: the blocks that make up the home page.
- `src/components/ui/`: shared pieces. `styles.ts` holds the button, card and chip recipes.
- `src/app/globals.css`: colour tokens for the light and dark themes, the type scale and base styles.
- `src/lib/seo.ts`: page metadata and structured data.

## Colours

Components use token names (`bg-canvas`, `text-ink`, `text-muted`, `bg-accent`, and so on), never raw colours. To change the palette, edit the two token blocks at the top of `src/app/globals.css`, then run `npm run check:contrast` to confirm every text and background pair still meets WCAG AA.
