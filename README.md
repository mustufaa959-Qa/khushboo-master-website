# Khushboo Master — Perfume Website

A catalogue website for Khushboo Master, listing the channel's 14 verified
YouTube fragrance videos. The layout and visual language (cream background,
dark burgundy and gold, ornate script initial, circular category row, dark
hero, product grid with tabs, about block, dark footer, and a tabbed product
page) follow the reference website shown in the supplied video. All code,
graphics and copy on this site are original: no logo, photo, product name,
price or text was copied from the reference site.

## Spelling distinction

The website is named **Khushboo Master**, as the user named it. The verified
YouTube channel is spelled **Kushboo Master** (@kushboomaster,
https://www.youtube.com/@kushboomaster). The channel name has not been
changed; the two spellings are kept distinct on purpose.

## Technology stack

- Next.js 14 (App Router) + TypeScript + React 18
- Plain CSS in `app/globals.css` (no CSS framework, no animation library;
  entrance/scroll effects use CSS animations and IntersectionObserver)
- No database, no backend services, no analytics, no third-party scripts

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Data

All products live in `app/data/products.ts` — exactly the 14 verified video
titles, dates, view counts and YouTube links. Every product's `price` and
`affiliateUrl` are `null`. Category is assigned only where the title itself
says so (For Her / Both / Body Spray / Room); otherwise "All". "Best
Sellers" are the 4 most-viewed videos; "New Arrivals" are the 3 most recent.

Product images are original inline-SVG bottle illustrations, recoloured per
product. They are not photos of real products and make no claim about a
product's appearance.

## Adding an affiliate product

When affiliate products, prices and links are supplied, edit
`app/data/products.ts` for the matching entry:

1. Set `price` to the supplied price (change its type from `null` first if
   a price type is introduced — keep the field honest: never show a price
   that was not supplied).
2. Set `affiliateUrl` to the supplied affiliate link.
3. Add the real product display in the product page and card components so
   the link is shown as an outbound affiliate link; do not add checkout,
   payment or account features without a separate, explicit decision.

Do not add fragrance notes, longevity, stock, discount or sales claims
unless they are verified from the video or supplied with evidence.

## SEO

Unique titles/meta descriptions per page, Open Graph metadata, `robots.ts`,
`sitemap.xml` (all routes), JSON-LD `WebSite` + `ItemList` on the homepage
and `Product` on product pages, using only verified data. No analytics or
tracking is configured (no account exists).

The canonical site URL defaults to
`https://khushboo-master-website.vercel.app` in `app/data/products.ts`
(`SITE_URL`); override it with the `NEXT_PUBLIC_SITE_URL` environment
variable if Vercel assigns a different URL.

## Design decisions

- Header: announcement bar, script "K" monogram, product search (a real
  GET form to `/shop`), and a navigation bar. No login, wishlist, cart or
  track-orders controls exist, because no such services exist.
- Homepage: hero slider (auto-advance, arrows, dots, staggered entrance,
  disabled motion under `prefers-reduced-motion`), circular category
  links, category cards, tabbed Favourite Products grid, verified-facts
  strip, about block, latest-videos list.
- Shop: working client-side search, category filter and sort
  (date/views/title), with an empty state and a clear-filters action.
- Product page: breadcrumbs, illustration gallery (3 backdrop variants),
  verified facts only, a plain "Affiliate link not yet added" state,
  a Watch on YouTube link, tabs (Description / Details / Reviews (0)),
  a specs table limited to verified facts, and related products.
- Responsive breakpoints for phone, tablet, laptop and desktop; no
  horizontal overflow. Semantic HTML, visible focus states, labels and
  alt text throughout.

## Not yet implemented / blocked

- Affiliate links and prices: not supplied yet. Product pages show
  "Affiliate link not yet added" instead of a fake button.
- Checkout, payment, Buy Now, cart, accounts, wishlist, order tracking:
  no services or credentials exist; omitted entirely.
- Newsletter / contact forms: no service or contact details supplied;
  omitted entirely.
- Custom domain: none supplied; the site uses its Vercel-assigned URL.
- Pinterest integration: the existing Pinterest account was never
  identified (sign-in stopped at Google 2-Step Verification); no
  Pinterest work is included in this site.
- No Lighthouse score is claimed: none was measured in the build
  environment.

## Deployment

Deployed from the `main` branch of this repository via Vercel
(see the repository and deployment records for the live URL). No
environment variables are required.
