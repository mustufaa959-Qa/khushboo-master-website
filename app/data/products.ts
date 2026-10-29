// The ONLY products on this site: the 14 verified YouTube video titles,
// dates, view counts and links from the Khushboo Master channel audit.
// No fragrance notes, prices, stock, discounts or claims are included,
// because none were verified from the videos.
//
// price and affiliateUrl are null for every product: the user will
// supply affiliate products, prices and links later. Do not invent them.
// To add an affiliate product, set price and affiliateUrl on its entry
// (see README.md "Adding an affiliate product").

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://khushboo-master-website.vercel.app";

export const CHANNEL_URL = "https://www.youtube.com/@kushboomaster";

export type Product = {
  slug: string;
  title: string;
  date: string; // ISO date of the YouTube video, as verified
  dateLabel: string;
  views: number;
  youtubeUrl: string;
  categories: string[];
  hue: number; // illustration colour only, not a product claim
  price: null;
  affiliateUrl: null;
};

export const PRODUCTS: Product[] = [
  {
    slug: "new-all-body-spray",
    title: "New All Body Spray | Low & High Price | Kushboo Master",
    date: "2022-09-22",
    dateLabel: "22 Sep 2022",
    views: 21,
    youtubeUrl: "https://www.youtube.com/watch?v=WufZ2hOskkc",
    categories: ["Body Spray"],
    hue: 28,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "she-is-happy-body-spray",
    title: "She is Happy | Body Spray | Latest Product",
    date: "2022-08-05",
    dateLabel: "5 Aug 2022",
    views: 13,
    youtubeUrl: "https://www.youtube.com/watch?v=DPSalmb2Z5o",
    categories: ["Body Spray", "For Her"],
    hue: 330,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "little-pencil-perfume",
    title: "Little Pencil Perfume | Latest Product",
    date: "2022-08-05",
    dateLabel: "5 Aug 2022",
    views: 177,
    youtubeUrl: "https://www.youtube.com/watch?v=xKqUIGvV428",
    categories: ["All"],
    hue: 200,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "she-body-spray-different-flavour",
    title: "She Body Spray | Different Flavour | Qasim Vlog",
    date: "2022-06-01",
    dateLabel: "1 Jun 2022",
    views: 8,
    youtubeUrl: "https://www.youtube.com/watch?v=J0K6RoixHUQ",
    categories: ["Body Spray", "For Her"],
    hue: 290,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "best-perfumes-mens-womens",
    title: "Best Perfumes for Men's and Women's || Qasim Vlog",
    date: "2022-03-01",
    dateLabel: "1 Mar 2022",
    views: 121,
    youtubeUrl: "https://www.youtube.com/watch?v=JylXv5tANGA",
    categories: ["Both"],
    hue: 150,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "graceful-perfume",
    title: "Complete Detail about Graceful Perfume || Qasim Vlog",
    date: "2022-02-22",
    dateLabel: "22 Feb 2022",
    views: 890,
    youtubeUrl: "https://www.youtube.com/watch?v=E_KMeEERdAk",
    categories: ["All"],
    hue: 45,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "lux-arabia-perfume",
    title: "Lux Arabia Perfume for Men's and Women's || Qasim Vlog",
    date: "2022-02-22",
    dateLabel: "22 Feb 2022",
    views: 175,
    youtubeUrl: "https://www.youtube.com/watch?v=Xgzam_xhuXo",
    categories: ["Both"],
    hue: 20,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "cherish-perfume",
    title: "Cherish perfume Men's and Women's || Qasim Vlog",
    date: "2022-02-22",
    dateLabel: "22 Feb 2022",
    views: 142,
    youtubeUrl: "https://www.youtube.com/watch?v=sFep4hNl2EQ",
    categories: ["Both"],
    hue: 350,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "most-unique-scent",
    title: "The scent of this perfume is the most Unique || Qasim Vlog",
    date: "2022-02-22",
    dateLabel: "22 Feb 2022",
    views: 185,
    youtubeUrl: "https://www.youtube.com/watch?v=liOel-KTZKw",
    categories: ["All"],
    hue: 260,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "lover-secret-perfume",
    title: "Lover Secret Perfume for Men's and Women's || Qasim Vlog",
    date: "2022-02-22",
    dateLabel: "22 Feb 2022",
    views: 103,
    youtubeUrl: "https://www.youtube.com/watch?v=ZNXCL0WXkXM",
    categories: ["Both"],
    hue: 320,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "urban-perfume",
    title: "Review about Urban perfume || Qasim Vlog",
    date: "2022-01-31",
    dateLabel: "31 Jan 2022",
    views: 204,
    youtubeUrl: "https://www.youtube.com/watch?v=E0vGyCZBtLg",
    categories: ["All"],
    hue: 220,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "romantic-perfume",
    title: "Romantic perfume for Virgins || Qasim Vlog",
    date: "2022-01-30",
    dateLabel: "30 Jan 2022",
    views: 252,
    youtubeUrl: "https://www.youtube.com/watch?v=3DFrQLNt4Ys",
    categories: ["All"],
    hue: 0,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "coolest-perfume-for-room",
    title: "The coolest perfume for Room || Qasim Vlog",
    date: "2022-01-06",
    dateLabel: "6 Jan 2022",
    views: 158,
    youtubeUrl: "https://www.youtube.com/watch?v=mabD5PriZLY",
    categories: ["Room"],
    hue: 180,
    price: null,
    affiliateUrl: null,
  },
  {
    slug: "cool-decent-perfume-womens",
    title: "Very cool and Decent perfume for Women's || Qasim Vlog",
    date: "2022-01-05",
    dateLabel: "5 Jan 2022",
    views: 543,
    youtubeUrl: "https://www.youtube.com/watch?v=xMVKP418t4I",
    categories: ["For Her"],
    hue: 270,
    price: null,
    affiliateUrl: null,
  },
];

export const CATEGORIES = ["All", "For Her", "Both", "Body Spray", "Room"] as const;

/** Most-viewed first; the 4 most-viewed are the "Best Sellers" set. */
export const BEST_SELLERS = [...PRODUCTS]
  .sort((a, b) => b.views - a.views)
  .slice(0, 4);

/** Most recent first; the 3 most recent are the "New Arrivals" set. */
export const NEW_ARRIVALS = [...PRODUCTS]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
