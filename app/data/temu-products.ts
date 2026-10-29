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
//
// The 25 "solid perfumes" entries appended at the end of TEMU_PRODUCTS
// come ONLY from workspace/khushboo-master/temu-links-verified-2026-10-29.json
// (indices 1, 8, 12, 14, 18, 19, 20, 22, 25, 26, 27, 28, 29, 35, 37, 39, 40,
// 41, 42, 44, 45, 46, 47, 48, 49). Titles, prices and image URLs are
// verbatim from that JSON; the buy link is the supplied temu.to short
// link verbatim. packagingScore is 3 for all 25 (no score was supplied,
// so no "Gift-ready pick" badge is claimed). See
// TEMU_SOLID_INTEGRATION_REPORT.md.
// affiliateUrl is null when the file's affiliate_url is empty: those
// products render with NO buy button. brand_as_listed is deliberately
// NOT carried into this file: no brand is named on the site.

export const AFFILIATE_DISCLOSURE =
  "As an affiliate, Khushboo Master may earn a commission if you buy through links on this site, at no extra cost to you.";

export type GiftCategory =
  | "men"
  | "women"
  | "unisex"
  | "gift set"
  | "solid perfumes";

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
  {
    slug: "temu-solid-606597371787684",
    title: "YSUOZ Pink Blooming Bouquet Solid Perfume for Women, Long-Lasting Floral Fragrance Balm, Portable Travel Size Perfume, Ideal Birthday Christmas Gift for Dating Daily Use",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.99",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/algo_check/auto/55f2bd9847efdabfb36d9513935bbce0_1790666984027.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ee0cyzngdsz",
    packagingNotes: "Pink solid perfume bottles; gift wording in title.",
    whatYouSee: "Pink solid perfume bottles; gift wording in title.",
    viralEvidence: "Checked 2026-10-29: verified on the direct Temu product page.",
    randomScent: false,
    verificationFlags: [],
    goodsId: "606597371787684",
  },
  {
    slug: "temu-solid-607315705077589",
    title: "Arabian Pure Perfume, Floral Scent for Women, Fresh Body Mist, Exquisite Color Palette, High-End Women'S Perfume, Long-Lasting Fragrance, Showcasing Women'S Confidence And Charm, Compact And Portable, Refillable Anytime, Suitable for Dates, Work",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.30",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/532e449d-60f7-48b6-b63b-e76a3f64f254.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eldgnqjf74e",
    packagingNotes: "Pink solid perfume bottles; compact, portable, refillable.",
    whatYouSee: "Pink solid perfume bottles; compact, portable, refillable.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607315705077589",
  },
  {
    slug: "temu-solid-606383009297129",
    title: "Flame Charm Solid Balm, Suitable for Both Men And Women, Long-Lasting Oriental Floral Fragrance, Containing Rose And Amber Scents, Enhancing Charm And Confidence, Small And Easy to Carry, Replenishing Fragrance at Any Time, Suitable for Dating",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.53",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/3b211900-8fc1-4421-b199-3e4698e3ed57.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eslbxrezvw3",
    packagingNotes: "Solid perfume balm tin; small/easy-to-carry.",
    whatYouSee: "Solid perfume balm tin; small/easy-to-carry.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606383009297129",
  },
  {
    slug: "temu-solid-606662769404375",
    title: "USHOW Amber Solid Perfume, Retro Luxurious Balm, Texture Long-Lasting Warm Scent, Date Daily Portable Gift",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.62",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/1dcf8dbf-1a29-4923-9bd7-9d9b8b048f42.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/epu36qoggep",
    packagingNotes: "Amber solid perfume beside black gift box; gift packaging shown.",
    whatYouSee: "Amber solid perfume beside black gift box; gift packaging shown.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606662769404375",
  },
  {
    slug: "temu-solid-605914723652120",
    title: "4pcs Solid Perfume Balm Set, Portable Pocket Long Lasting Fragrance, Elegant Refreshing Body Solid Cologne for Women Ladies Daily Use, Mother's Day Gift",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$18.39",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/23a853a15eab46f3b8dbf0827e32b899-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/erkca5njaio",
    packagingNotes: "4 solid perfume balm tins; Mother's Day Gift wording.",
    whatYouSee: "4 solid perfume balm tins; Mother's Day Gift wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "605914723652120",
  },
  {
    slug: "temu-solid-601105481065800",
    title: "Women'S Portable Stick Solid Perfume, Long-Lasting Romantic Pheromone, Aromatic Fragrance, with Attractive Scent, for Adult, Dating And Daily Life",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$10.32",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/fc6a23b9-03f3-4f8c-a2ef-57b112f6140e.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ey1hwi33eps",
    packagingNotes: "Black stick solid perfume beside a LOST CHERRY box; gift box shown.",
    whatYouSee: "Black stick solid perfume beside a LOST CHERRY box; gift box shown.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "601105481065800",
  },
  {
    slug: "temu-solid-606739407682021",
    title: "Far Away Ladies Eau De Parfum (Pink) Long-Lasting Fresh Woody Floral Lemon Citrus Jasmine Violet Cinnamon Enhance Confidence Charm Dating Work Daily Festival Birthday Gift Preferred Far Away Ladies Perfume Long-Lasting Ladies Perfume",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$4.77",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/4b63dd6e714e4bafa4ac938d118b473e-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e1dohypyoy1",
    packagingNotes: "Pink solid perfume; Birthday Gift wording.",
    whatYouSee: "Pink solid perfume; Birthday Gift wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606739407682021",
  },
  {
    slug: "temu-solid-606873591874806",
    title: "Luxury Dubai-Inspired Solid Perfume for Ladies, Rich Desert Golden Scent, Citrus Floral Sandalwood And Musk Notes, Portable Push Design Scented Balm, Long-Lasting Subtle Aroma, Perfect for Gifting, Dating, And Daily Use",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.55",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/b00c7e7e-77d3-43d6-b806-2ea5981c6be9.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eah1ddnkki4",
    packagingNotes: "Gold solid perfume bottle/box; Perfect for Gifting wording.",
    whatYouSee: "Gold solid perfume bottle/box; Perfect for Gifting wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606873591874806",
  },
  {
    slug: "temu-solid-605737824653252",
    title: "TONFLY Alcohol-Free Perfume | Portable Perfume | Travel Size | Home Perfume | Gothic Perfume | Unisex Light Perfume | Fresh Natural Perfume | Beard Perfume Oil",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$7.82",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/246c0154-7d1d-48d3-b03a-f7edbe0c06ce.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ews5z2njt63",
    packagingNotes: "Green skull-shaped perfume bottle beside BEARD OIL box.",
    whatYouSee: "Green skull-shaped perfume bottle beside BEARD OIL box.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "605737824653252",
  },
  {
    slug: "temu-solid-607171991446137",
    title: "Agarwood Woody Solid Perfume Portable Perfume Balm Unisex Non-Spray Fragrance Long-Lasting Scent for Travel, Dates, Office, Gift, Premium Oriental Woody Notes, Screw-Top Balm",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.45",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/fdb036c40459416695532044e141345a-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/evf19q0mxd1",
    packagingNotes: "LIBRE-labeled bottle and solid balm tins; Gift in title.",
    whatYouSee: "LIBRE-labeled bottle and solid balm tins; Gift in title.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607171991446137",
  },
  {
    slug: "temu-solid-607122800671246",
    title: "Dubai Arabian Luxury Women's Perfume Balm, Long-Lasting Oriental Woody and Floral Fragrance with Notes of Rose, Jasmine, and Amber, Cedarwood Perfume Stick, Formaldehyde-Free Luxury Balm, Suitable for Dates, Work, Travel, Christmas, and Valentine's",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$4.06",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/51a53f94-7e3e-4a1d-acf9-20a47add4269.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ejsfhnmya3b",
    packagingNotes: "Round solid perfume tin with roses; Christmas/Valentine's wording.",
    whatYouSee: "Round solid perfume tin with roses; Christmas/Valentine's wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607122800671246",
  },
  {
    slug: "temu-solid-607273594283426",
    title: "A Long-Lasting, Captivating Oud And Rose Solid Perfume for Women. Alcohol-Free And Featuring a Warm, Sweet Scent That Exudes Feminine Charm, It Is Perfect for Daily Wear, Work, Parties, And Romantic Evenings Out. Compact And Travel-Friendly",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.79",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/a669a474a80a477397a9c689ea3c1918-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/emndldhoxki",
    packagingNotes: "Woman beside gold solid perfume tin/bottle.",
    whatYouSee: "Woman beside gold solid perfume tin/bottle.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607273594283426",
  },
  {
    slug: "temu-solid-606658038231953",
    title: "Arabic Pure Solid Perfume, 1pc 20g, Floral Scent for Women, Fresh Body Fragrance, Exquisite and High-End Women's Perfume, Long-Lasting Fragrance, Showcasing Women's Confidence and Charm, Compact and Portable for Refreshing Scent Anytime",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.65",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/df897947-de7a-4d54-b342-098d39a283cb.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eeqclvee7qh",
    packagingNotes: "Pink solid perfume bottle and open balm tin with roses.",
    whatYouSee: "Pink solid perfume bottle and open balm tin with roses.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606658038231953",
  },
  {
    slug: "temu-solid-606840876320826",
    title: "Azure Cologne Men's Solid Perfume, Fresh Natural Scent, Long-Lasting Body Fragrance, Men's Solid Perfume, Durable Cologne, Party - Gift for Friends, Family, Husband, Halloween, Christmas, Best Gift for Men",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.36",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/c27e9f8c-4f2b-48ca-aad3-76a1e57366b9.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eduakkjfm9j",
    packagingNotes: "Blue men's solid perfume labeled BLUE; Best Gift for Men wording.",
    whatYouSee: "Blue men's solid perfume labeled BLUE; Best Gift for Men wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606840876320826",
  },
  {
    slug: "temu-solid-606087864543598",
    title: "2pcs-Men's Pheromone Solid Perfume, Cupid Perfume Balm Long-lasting Fragrance, Portable and Convenient Pocket Perfume, Enhances Masculine Appeal Daily Scent Management, Perfect for Dates and Gatherings Ideal Gift for Boyfriends",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$7.73",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/fa0a70f183ff4bcf921ff7c773b806ad-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e18rgsq6g4b",
    packagingNotes: "Two men's solid perfume balm tins/sticks; Ideal Gift for Boyfriends wording.",
    whatYouSee: "Two men's solid perfume balm tins/sticks; Ideal Gift for Boyfriends wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606087864543598",
  },
  {
    slug: "temu-solid-606724341790409",
    title: "Ebony Amber Solid Perfume Balm, Woody Oriental Fragrance Balm, Portable Body Balm for Men and Women, Unisex Daily Fragrance, Light Luxury High-End Scent, Suitable for Commuting, Dating, Travel, and Parties, Compact Round Box for Easy Carrying",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.07",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/68f2cd0b-830b-4039-8636-a957b68d05e5.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ehotjbynr2u",
    packagingNotes: "XYLEN OUD AMBER round solid perfume tin/bottle.",
    whatYouSee: "XYLEN OUD AMBER round solid perfume tin/bottle.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606724341790409",
  },
  {
    slug: "temu-solid-607135215754264",
    title: "2PCSArabian Musk Solid Perfume, 15G/0.529oz, Classic Woody Scent, Long-Lasting And Rich Fragrance, Perfect for Travel, Work, Or As a Birthday Gift",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$5.23",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/af46d18e028c43098a9e94878c1a7724-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e7plkvzc8kc",
    packagingNotes: "2-piece bottle-shaped solid perfumes in boxes; Birthday Gift wording.",
    whatYouSee: "2-piece bottle-shaped solid perfumes in boxes; Birthday Gift wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607135215754264",
  },
  {
    slug: "temu-solid-606483873930161",
    title: "Arabian Perfume Balm, Black Lion + 15g Balm, Unisex, High-End Balm, Perfume Balm, Alcohol-Free, Long-Lasting Oriental Floral Fragrance, Contains Notes of Rose, Pink Pepper, and Amber, Enhances Charm and Confidence, Suitable for Gifting, Travel",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.87",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/1a586946-1630-4ec5-aa4e-037d6b4a366e.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e34urnq7t09",
    packagingNotes: "Pink Lion Black perfume balm bottle/tin with roses; Suitable for Gifting wording.",
    whatYouSee: "Pink Lion Black perfume balm bottle/tin with roses; Suitable for Gifting wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606483873930161",
  },
  {
    slug: "temu-solid-607049685541348",
    title: "2pcs Solid Perfume Balm for Women, Long-lasting Floral Scent, Portable Solid Perfume, Luxury Bottle, Perfect Christmas & Birthday Gift for Dating, Daily Wear",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$4.08",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/bc38e61ff7054c65ac44cb4e18cb56d3-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eo842g1dnk5",
    packagingNotes: "Round perfume bottle with phone-style balm cases; Perfect Christmas & Birthday Gift wording.",
    whatYouSee: "Round perfume bottle with phone-style balm cases; Perfect Christmas & Birthday Gift wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607049685541348",
  },
  {
    slug: "temu-solid-607123673044592",
    title: "2pcs Arabic Perfume Balm, Black Lion And Balm, Unisex, Premium Balm, Perfume Balm, Alcohol-Free, Long-Lasting Oriental Floral Scent, Containing Rose, Pink Pepper, Amber Fragrance, Enhancing Charm And Confidence, Suitable for Gifting, Travel",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$4.53",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/d12a65030515437f9afe7fa0bbe9ca01-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ejwm3m3ov0f",
    packagingNotes: "Two black perfume bottles/tins; Suitable for Gifting wording.",
    whatYouSee: "Two black perfume bottles/tins; Suitable for Gifting wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607123673044592",
  },
  {
    slug: "temu-solid-605668970970179",
    title: "Middle Eastern Dubai Woody Accord Solid Perfume Unisex Alcohol-Free Long-Lasting Woody Amber Fragrance with Lemon Citrus Musk, Enhancing Charm And Confidence, Black And Golden Elegant Gift Box, Suitable for Daily Work Dates",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.60",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/6609b2f4-116b-470b-a0b0-6a191c9e102c.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ebs8xziqa5w",
    packagingNotes: "Black/gold perfume bottle with boxes; Elegant Gift Box wording.",
    whatYouSee: "Black/gold perfume bottle with boxes; Elegant Gift Box wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "605668970970179",
  },
  {
    slug: "temu-solid-607534379300677",
    title: "2pcs Arabic Perfume Balm, Unisex, Premium Balm, Perfume Balm, Alcohol-Free, Long-Lasting Oriental Floral Scent, with Rose, Pink Pepper, Amber Fragrance, Enhancing Charm And Confidence, Suitable for Gifting, Travel, Daily Use",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$4.55",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/open/994e6dba8d734adc964975d0588227c9-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/ehl31c6a7fl",
    packagingNotes: "Two perfume bottles with boxes; Suitable for Gifting wording.",
    whatYouSee: "Two perfume bottles with boxes; Suitable for Gifting wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607534379300677",
  },
  {
    slug: "temu-solid-607186755389420",
    title: "NZBZWZWW Glacier Gentleman - Blue Silvery Wood Solid Perfume, Fresh Woody Fougere Scented Balm, Perfume Balm, Bergamot Lavender Cedar Amber Notes, Business Men'S Commute Date Travel Use, Exquisite Men'S Gift",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.14",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/c8f0d5d5-d39f-4794-be0e-b356d4d719aa.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e7q2zi4xrnq",
    packagingNotes: "Blue solid perfume tin/bottle on stone pedestal; Exquisite Men's Gift wording.",
    whatYouSee: "Blue solid perfume tin/bottle on stone pedestal; Exquisite Men's Gift wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607186755389420",
  },
  {
    slug: "temu-solid-607293458462385",
    title: "Women's Sexy Solid Perfume - Long-lasting Fragrance with a Layered Cherry Rose Scent, Enduring Without Being Overpowering. A Portable Travel Perfume, Perfect for Daily Use, Dates, or Vacations. An Ideal Gift for Women",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$2.86",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/e84db99f-cd09-45b4-8060-2070282f20e6.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/eeyx82udwy0",
    packagingNotes: "Phone-case style solid perfume with cherries; Ideal Gift for Women wording.",
    whatYouSee: "Phone-case style solid perfume with cherries; Ideal Gift for Women wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "607293458462385",
  },
  {
    slug: "temu-solid-606703437380746",
    title: "Pink Kitten Women's Solid Perfume - Alcohol-Free Suitable for Men's Attraction, -Lasting Scent, Portable Travel-Friendly Perfume Stick, Formula for Daily Wear, Dates, Parties |, Valentine's Day",
    category: "solid perfumes",
    packagingScore: 3,
    price: "$3.23",
    currency: "USD",
    imageUrl: "https://img.kwcdn.com/product/fancy/4d82b701-0066-4f52-8e46-c6641de98068.jpg?imageView2/2/w/500/q/70/format/avif",
    affiliateUrl: "https://temu.to/k/e8oyk8ghdts",
    packagingNotes: "Pink kitten perfume stick/tin beside pink cat figurine; Valentine's Day wording.",
    whatYouSee: "Pink kitten perfume stick/tin beside pink cat figurine; Valentine's Day wording.",
    viralEvidence: "Checked 2026-10-29: matched by goods_id on the Temu landing page; full product page not verified.",
    randomScent: false,
    verificationFlags: ["landing-page-only: matched by goods_id; full product page not verified"],
    goodsId: "606703437380746",
  },
];

export const GIFT_CATEGORIES: { value: GiftCategory | "all"; label: string }[] = [
  { value: "all", label: "All Gift Picks" },
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "unisex", label: "Unisex" },
  { value: "gift set", label: "Gift Sets" },
  { value: "solid perfumes", label: "Solid Perfumes" },
];

export function giftCategoryLabel(category: GiftCategory): string {
  if (category === "gift set") return "Gift Set";
  if (category === "men") return "Men";
  if (category === "women") return "Women";
  if (category === "solid perfumes") return "Solid Perfumes";
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
