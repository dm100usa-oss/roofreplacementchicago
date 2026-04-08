# Roof Repair Chicago NOW

**Domain:** roofrepairchicagonow.com  
**Stack:** Next.js 14, TypeScript, CSS Modules  
**Hosting:** Vercel  

---

## Project structure

```
src/
  app/                      # All pages (Next.js App Router)
    page.tsx                # Home page
    layout.tsx              # Root layout (Header + Footer)
    not-found.tsx           # 404 page
    sitemap.ts              # Auto-generated sitemap.xml
    robots.ts               # robots.txt
    about/page.tsx
    how-it-works/page.tsx
    how-we-rank/page.tsx
    contact/page.tsx
    disclosure/page.tsx
    privacy/page.tsx
    neighborhoods/[slug]/page.tsx   # 10 neighborhood pages
    services/[slug]/page.tsx        # 15 service pages
    articles/[slug]/page.tsx        # 5 article pages
  components/
    Header.tsx + Header.module.css
    Footer.tsx + Footer.module.css
    CompanyCard.tsx + CompanyCard.module.css
  lib/
    companies.ts            # All 10 companies — edit here to update everywhere
    neighborhoods.ts        # Neighborhood data
    services.ts             # Service page data
    articles.ts             # Article content
  styles/
    globals.css             # CSS variables + reset
```

---

## How to deploy to Vercel via GitHub

1. Create a new repository on GitHub
2. Upload all project files (drag and drop in GitHub browser interface)
3. Go to vercel.com → New Project → Import from GitHub
4. Select the repository → Deploy
5. In Vercel project settings → Domains → Add roofrepairchicagonow.com
6. Follow Vercel's DNS instructions to point your domain

---

## Before launch — replace placeholders

In `src/lib/companies.ts`:
- Replace all phone numbers (`3120000000` etc.) with real Marketcall numbers
- Replace `website: '#'` with real company website URLs
- Update company names, descriptions, ratings as needed

---

## Adding more neighborhoods (Phase 2)

1. Open `src/lib/neighborhoods.ts`
2. Add a new object to the `neighborhoods` array with: slug, name, title, metaDescription, intro, areaText, faq
3. The page is automatically created — no other files to touch

---

## Call tracking

Each company has its own phone number in `companies.ts`. Replace placeholders with real Marketcall tracking numbers to identify which company and page generates each call.
