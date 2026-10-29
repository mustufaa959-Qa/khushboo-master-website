// Gift-ready Temu products, rendered from the authoritative file
// workspace/user/files/khushboo-master-candidates-2026-10-29.json ONLY.
//
// This is the RENDERED subset only: 14 of the 24 file products.
// 10 products were OMITTED because their exact titles could not be
// verified from a live Temu listing (see TEMU_INTEGRATION_REPORT.md).
// The 8 held/rejected items in the file are never used.
//
// Titles, packaging notes, prices, currencies, image URLs, affiliate
// URLs, categories, packaging scores and verification flags are copied
// verbatim from the file. Nothing was invented, renamed or converted.
// affiliateUrl is null when the file's affiliate_url is empty: those
// products render with NO buy button. brand_as_listed is deliberately
// NOT carried into this file: no brand is named on the site.

export const AFFILIATE_DISCLOSURE =
  "As an affiliate, Khushboo Master may earn a commission if you buy through links on this site, at no extra cost to you.";

export type GiftCategory = "men" | "women" | "unisex" | "gift set";

export type GiftProduct = {
  slug: string;
  title: string;
  category: GiftCategory;
  packagingScore: number;
  price: number | string | null;
  currency: string;
  imageUrl: string;
  affiliateUrl: string | null;
  packagingNotes: string;
  whatYouSee: string;
  viralEvidence: string;
  randomScent: boolean;
  verificationFlags: string[];
  goodsId: string | null;
};

export const TEMU_PRODUCTS: GiftProduct[] = [
  {
    slug: "temu-khushboo-platinum-edp-men-100ml",
    title: "Platinum Eau de Parfum for Men, 3.3oz / 100ml",
    category: "men",
    packagingScore: 5,
    price: 47.06,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/local-goods-image/21140d67a10/100acc6e-f88c-45d2-b817-121257e42662_1200x1200.jpeg.format.jpg",
    affiliateUrl: null,
    packagingNotes: "Listing says \"Ideal for gifting\". Notes: black pepper/pineapple/berries top; sage/geranium middle; vanilla/sandalwood/leather/patchouli base.",
    whatYouSee: "A polished silver flask-style bottle with a domed cap, an embossed horse-carriage emblem and a black hanging tag, beside a matching brushed-silver presentation box reading PLATINUM EAU DE PARFUM, 100ml / 3.3 fl oz. It is a clean studio shot.",
    viralEvidence: "Rating 4.4 (13 reviews); no sold count stated in extract.",
    randomScent: false,
    verificationFlags: [],
    goodsId: "602433677845894",
  },
  {
    slug: "temu-khushboo-skull-perfume-solid-balm-set",
    title: "2pcs Skull Perfume And Solid Balm Set, Blue Skull Bottle Eau De Parfum with Portable Solid Fragrance Tin, Men's Scent Gift Set for Travel, Office And Casual Use",
    category: "men",
    packagingScore: 4,
    price: 10.48,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/3c681518-7d4e-4156-a300-2c8fb936b5c5.jpg",
    affiliateUrl: null,
    packagingNotes: "Blue skull bottle EDP + portable solid fragrance tin; sold as a men's scent gift set for travel, office and casual use. Full share URL was truncated in tool display; canonical goods.html URL with the verified goods_id is given — re-verify the goods_id on the live page before conversion.",
    whatYouSee: "A bright blue crystal skull-shaped bottle with a silver collar and dropper cap, beside a deep-blue box with a large crystal-skull image reading BLUE CRYSTAL SKULL, eau de parfum for men, 30mL, and a black solid-perfume tin. A text overlay reads 2PCS SET, Skull Perfume & Balm.",
    viralEvidence: "147 sold, 4.5 stars, #9 Best Seller from this store; seller 9.9K+ sold.",
    randomScent: false,
    verificationFlags: [],
    goodsId: "606053840329178",
  },
  {
    slug: "temu-khushboo-mystery-oud-edp-100ml",
    title: "EDP Spray Fragrance for Men, Scent, 100ML, Oriental Fragrance, Use, Work, Romantic Dates, Great Gift for Father'S Day And Other Celebrations, MYSTERY OUD",
    category: "men",
    packagingScore: 4,
    price: 49.99,
    currency: "MYR",
    imageUrl: "https://img.kwcdn.com/product/fancy/c2fd8eba-3b0d-47a6-96e1-25a48dfdafd1.jpg",
    affiliateUrl: null,
    packagingNotes: "Oriental fragrance positioned as a great gift for Father's Day and other celebrations. Do NOT use the goods-detail share_img png from the source URL as the image; image_url is the decoded thumb_url.",
    whatYouSee: "A rectangular amber-brown glass bottle with a black cylindrical cap and a gold plaque reading MYSTERY OUD PERFUME, photographed on driftwood against a warm tan background. No box is shown.",
    viralEvidence: "945 sold, 4.7 stars; seller 19K+ sold; #3 Top Rated in Fragrance.",
    randomScent: false,
    verificationFlags: [],
    goodsId: "601102292735112",
  },
  {
    slug: "temu-khushboo-urban-edp-3pc-gift-set",
    title: "Eau de Parfum for Men, 3.4 Fl Oz Urban Spray/3pc Gift Set, Leather & Scent, Sophisticated Daytime Fragrance, Modern American Cologne",
    category: "men",
    packagingScore: 4,
    price: 66.38,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/local-goods-image/21a488e0dc/6510e385-94cc-485d-86c0-925685b57161_1000x1000.png",
    affiliateUrl: null,
    packagingNotes: "3-piece gift set; leather scent, sophisticated daytime fragrance. Trailing share parameters of the source URL were truncated in tool display; goods_id and image parameters are intact.",
    whatYouSee: "A single glossy black flask-style bottle with a domed cap, an embossed horse-carriage emblem and a gold hanging tag, beside a black leather-textured box reading FOR MEN EAU DE PARFUM, 100ml / 3.3 fl oz. The photo carries a heavy pink Valentine's Day promotional frame with hearts, a 100% AUTHENTIC ribbon and a corner name banner.",
    viralEvidence: "139 sold, 4.9 stars; seller 100K+ sold.",
    randomScent: false,
    verificationFlags: ["set-count-not-pictured: only 1 bottle + box shown, 3-piece composition not visible; converter must re-verify", "promotional Valentine's frame overlays the product photo"],
    goodsId: "602210331132226",
  },
  {
    slug: "temu-womens-3piece-gift-pack-602513940035571",
    title: "Women's 3-Piece Set - Eau de Parfum, Body Lotion & Gift Pack 1 PACK",
    category: "gift set",
    packagingScore: 4,
    price: 28.92,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/local-goods-image/2123a61f7c/46a95092-a8a6-475b-8bce-7bc2bc76e7ab_1536x1536.jpeg.format.jpg",
    affiliateUrl: null,
    packagingNotes: "3-piece gift pack containing eau de parfum plus body lotion; jasmine, citrus and musk notes; presented as an elegant gift set.",
    whatYouSee: "Three coordinated pale-green/cream pieces: a frosted bottle with a distinctive tiered pagoda-style cap, a tall body-lotion tube, and a round jar with a landscape image on its lid. Plain white background; no gift box is shown.",
    viralEvidence: "801 sold; rating 4.8 (159 reviews in one crawl); #7 Best Seller from this store.",
    randomScent: false,
    verificationFlags: [],
    goodsId: "602513940035571",
  },
  {
    slug: "temu-perfume-collection-gift-mini-pack2-602612581690225",
    title: "Perfume Collection Gift Set For Women Mini Size 0.17 Fl. oz / 5 ml Pack of 2",
    category: "gift set",
    packagingScore: 4,
    price: 25.39,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/local-goods-image/2066d90b94/f02935a8-8b20-4c72-ba93-3487ad3b91f6_1500x1500.png",
    affiliateUrl: null,
    packagingNotes: "Miniature perfume collection gift set, pack of 2 x 5ml bottles; gift-set presentation for women.",
    whatYouSee: "One faceted crystal-cap bottle with pale pink liquid and a pink gradient box reading 5 ml, with name text on the bottle and box partly hidden behind the bottle. Clean white background.",
    viralEvidence: "1.3K+ sold; rating 4.5; store 650K+ sold in one crawl.",
    randomScent: false,
    verificationFlags: ["pack-count-not-pictured: only 1 of the pack-of-2 bottles shown; converter must re-verify"],
    goodsId: "602612581690225",
  },
  {
    slug: "temu-womens-perfume-3-random-styles-607486195125920",
    title: "Women'S Perfume, 1.7Oz, 3 Random Styles (Random Color And Scent), Natural Floral Fragrance, Long-Lasting Scent | Halloween/Christmas Surprise Gift",
    category: "gift set",
    packagingScore: 4,
    price: 9.21,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/ecd79d68659a46158ab11c33d29d3d9d-goods.jpeg",
    affiliateUrl: null,
    packagingNotes: "Sold as a Halloween/Christmas surprise gift; 3-piece random styles (random color and scent, buyer does not choose); natural floral fragrance, EDP concentration.",
    whatYouSee: "Seven round frosted bottles in pink, gold, silver, peach, purple, yellow and black, each with a coloured ball cap and a tassel, arranged on black plinths against pink roses. Some bottles carry small GOLDEN / SILVER / BLACK labels. The image is stylised and render-like; no box is shown.",
    viralEvidence: "71 sold; rating 4.2; store 1.7K+ sold.",
    randomScent: true,
    verificationFlags: ["random scent/style: buyer receives a random colour and scent; photo shows the range, not the unit received"],
    goodsId: "607486195125920",
  },
  {
    slug: "temu-hunt-perfume-floral-fragrance",
    title: "Perfume Floral Fragrance",
    category: "women",
    packagingScore: 4,
    price: "$15.00",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/6e4883b7-fcc6-47b1-8469-31a7a91c28ef.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/avif",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=606097947632989&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Elegant, gift-ready bottle: pink glass, silver cap, medallion and hanging tag, luxurious styling. Bottle carries legible name text visible in the photo that was not in the listing record; packaging judged only, converter must re-verify the exact title.",
    whatYouSee: "A pink rectangular bottle with a silver cap, a round silver medallion and a round hanging tag on a chain, with lettering including DIRHAM WARDI, against a pink-and-gold floral and chandelier background. No gift box is shown.",
    viralEvidence: "Sold: ; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: ["format-note: original image is AVIF; viewed via converted copy"],
    goodsId: null,
  },
  {
    slug: "temu-womens-perfume-fragrance",
    title: "Women's Perfume Fragrance",
    category: "women",
    packagingScore: 5,
    price: "$13.99",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/68a043e7-3f71-4f3c-8989-7eb0f6905c6c.jpg",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=601105138920924&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Stunning, clearly gift-worthy: three genuinely different, distinctive bottle designs (shoe, bicycle, crystal-cap round). DUPLICATE CHECK: this photo is distinct from the other three identically named items; no duplicate. The photo shows three designs, so the converter must re-verify which single bottle the listing unit is.",
    whatYouSee: "Three distinct gold novelty bottles on a gold platform: a gold high-heel shoe bottle, a white round Go chic bottle (25ml) on a gold bicycle stand, and a round gold Dream bottle (50ml) with a crystal cap. White flowers in front. No gift box is shown.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: ["duplicate-check: DISTINCT from the other three Women's Perfume Fragrance photos; not a duplicate", "multi-design photo: 3 bottle designs shown; converter must re-verify the listed unit"],
    goodsId: null,
  },
  {
    slug: "temu-womens-perfume-fragrance-2367",
    title: "Women's Perfume Fragrance",
    category: "women",
    packagingScore: 3,
    price: "$13.99",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/f8d9fe46-5587-4661-8c80-0ed3aaeb328e.jpg",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=601102288482367&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Presentable and giftable at the minimum bar: coordinated pink bottle and box, clean presentation. The bottle is a plain rectangle and the lettering on bottle and box is misspelled as photographed; packaging judged only. DUPLICATE CHECK: distinct from the other three identically named items.",
    whatYouSee: "A single rectangular pink glass bottle with a silver rectangular cap and a matching pink box, both reading ROMNAITC POUR FEMME, EAU DE PARFUM, 100ml / 3.4 fl oz, on a pink background.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: ["duplicate-check: DISTINCT from the other three Women's Perfume Fragrance photos; not a duplicate"],
    goodsId: null,
  },
  {
    slug: "temu-womens-perfume-fragrance-9582",
    title: "Women's Perfume Fragrance",
    category: "women",
    packagingScore: 4,
    price: "$13.99",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/local-goods-image/21140d63720/5b88347e-8d5e-4647-b29c-67f74dfb4ed6_1600x1600.jpeg.format.jpg",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=601102693779582&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Beautiful trio: three genuinely different elegant bottles, clearly giftable. DUPLICATE CHECK: distinct from the other three identically named items; no duplicate. The photo shows three designs, so the converter must re-verify which single bottle the listing unit is.",
    whatYouSee: "Three distinct bottles against blossom: a tall rectangular FOREVER YOURS bottle, a tall curved SWEET DREAM FOR HER bottle with yellow liquid, and a pink SHINE ANGEL bottle with a faceted pink cap. No gift box is shown.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: ["duplicate-check: DISTINCT from the other three Women's Perfume Fragrance photos; not a duplicate", "multi-design photo: 3 bottle designs shown; converter must re-verify the listed unit"],
    goodsId: null,
  },
  {
    slug: "temu-perfume-women-womens",
    title: "Perfume Women Womens",
    category: "women",
    packagingScore: 4,
    price: null,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/6ab9a724-f72a-4441-80cc-96dd9ac6903c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=601102085949085&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Distinctive, cute and gift-ready novelty: fruit-shaped bottle with a matching patterned box. Playful rather than luxury-elegant, but clearly beautiful and giftable as a novelty gift bottle.",
    whatYouSee: "A glossy red apple/cherry-shaped bottle with a green stem and Sweet Cherry lettering, beside a white box patterned with cupcakes and cherries also reading Sweet Cherry. Clean white background.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: [],
    goodsId: "601102085949085",
  },
  {
    slug: "temu-lover-floral-perfume-women-long-lasting-free",
    title: "Lover Floral Perfume Women Long Lasting Free",
    category: "women",
    packagingScore: 5,
    price: null,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/2743bb64-fc4b-4cf7-b778-2bcd77554b2d.jpg",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=601099572941743&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Stunning, clearly gift-ready: the rose-bud bottle with gold stem is distinctive and romantic. One of the most gift-like single bottles in the set.",
    whatYouSee: "A rose-bud shaped bottle: pink gradient glass rose head with a long gold stem-and-leaves cap, leaning against a pink block on a pink surface with crystal props. No gift box is shown.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: [],
    goodsId: "601099572941743",
  },
  {
    slug: "temu-2026-new-unisex-fragrance-occasion-fragrance-6pcs-set-long",
    title: "2026 New Unisex Fragrance Occasion Fragrance 6Pcs Set Long",
    category: "unisex",
    packagingScore: 3,
    price: null,
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/72116a0b-1d9a-467c-aa04-24a3155a474f.jpg",
    affiliateUrl: "https://www.temu.com/goods.html?goods_id=605829780628000&_x_cid=6013029639kol_affiliate",
    packagingNotes: "Presentable and giftable at the minimum bar: coordinated matte bottle and box with clean styling. The bottle itself is a plain matte rectangle with no ornament; kept for the coordinated gift box and presentation. Only one of the 6-piece set is pictured.",
    whatYouSee: "A single matte peach rectangular bottle reading MARSHMALLOW MIST, EXTRAIT DE PARFUM, 50ml, beside a matching matte peach box reading GOURMAND COLLECTION, with cinnamon, vanilla and sugar props on wood.",
    viralEvidence: "Sold: None; Rating: 4.5; Badges: new",
    randomScent: false,
    verificationFlags: ["set-count-not-pictured: only 1 of the 6-piece set shown; converter must re-verify"],
    goodsId: "605829780628000",
  },
];

export const GIFT_CATEGORIES: { value: GiftCategory | "all"; label: string }[] = [
  { value: "all", label: "All Gift Picks" },
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "unisex", label: "Unisex" },
  { value: "gift set", label: "Gift Sets" },
];

export function giftCategoryLabel(category: GiftCategory): string {
  if (category === "gift set") return "Gift Set";
  if (category === "men") return "Men";
  if (category === "women") return "Women";
  return "Unisex";
}

/** Price exactly as listed in the file, with its currency. Null when no price was listed. */
export function giftPriceLabel(product: GiftProduct): string | null {
  if (product.price === null || product.price === undefined) return null;
  if (typeof product.price === "number") return `${product.price.toFixed(2)} ${product.currency}`;
  return `${product.price} ${product.currency}`;
}

/** Numeric price for sorting only (never displayed). Null when no usable price. */
export function giftPriceValue(product: GiftProduct): number | null {
  if (typeof product.price === "number") return product.price;
  if (typeof product.price === "string") {
    const n = Number(product.price.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  return null;
}

/** One-line packaging line: the first whole clause of packagingNotes, never adding words. */
export function giftCardLine(product: GiftProduct): string {
  const firstClause = product.packagingNotes.split(";")[0].trim();
  const sentenceEnd = firstClause.indexOf(". ");
  if (sentenceEnd > 0) return firstClause.slice(0, sentenceEnd + 1);
  return firstClause;
}

const PACKAGING_META = [
  "converter",
  "re-verify",
  "duplicate check",
  "truncated in tool display",
  "do not use",
  "must not be used",
  "share_img",
  "goods.html",
  "goods_id",
  "tool display",
];

/**
 * Full packaging notes for the detail page, minus converter
 * meta-sentences (instructions to the converter about truncated URLs,
 * duplicate checks and re-verification). Those sentences describe the
 * file-building process, not the product, so they are omitted from
 * display only; the raw notes stay verbatim in the data above.
 */
export function giftPackagingText(product: GiftProduct): string {
  const parts = product.packagingNotes.split(". ");
  const sentences = parts.map((part, i) =>
    i < parts.length - 1 ? `${part}.` : part,
  );
  const kept = sentences.filter(
    (s) => !PACKAGING_META.some((m) => s.toLowerCase().includes(m)),
  );
  const text = kept.join(" ").trim();
  return text === "" ? product.packagingNotes : text;
}

export function getGiftProduct(slug: string): GiftProduct | undefined {
  return TEMU_PRODUCTS.find((p) => p.slug === slug);
}

/** Gift-ready picks for the homepage: packaging score 5 first, then 4, in file order. */
export const GIFT_READY_PICKS = TEMU_PRODUCTS.filter(
  (p) => p.packagingScore >= 4,
).sort((a, b) => b.packagingScore - a.packagingScore);

/** Same-category recommendations, never the product itself, at most 4. No cross-category padding. */
export function giftRecommendations(product: GiftProduct): GiftProduct[] {
  return TEMU_PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 4);
}
