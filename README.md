# Nworah Ebuka Augustus — Next.js portfolio

The production portfolio is a single Next.js 16 application at the repository root.

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
```

Public content is controlled by publication and verification states in `lib/content.ts`. Drafts and unverified records are filtered before route generation, navigation, metadata, JSON-LD and sitemap generation.
