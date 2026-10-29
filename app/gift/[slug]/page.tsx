import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GiftCard from "../../components/GiftCard";
import {
  AFFILIATE_DISCLOSURE,
  TEMU_PRODUCTS,
  getGiftProduct,
  giftCategoryLabel,
  giftPackagingText,
  giftPriceLabel,
  giftRecommendations,
} from "../../data/temu-products";
import { SITE_URL } from "../../data/products";

export function generateStaticParams() {
  return TEMU_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getGiftProduct(params.slug);
  if (!product) return { title: "Gift pick not found" };
  return {
    title: `${product.title} — Gift Shop`,
    description: `Gift-ready ${giftCategoryLabel(product.category).toLowerCase()} perfume pick from Khushboo Master. Price as listed — check the live price before buying.`,
    openGraph: {
      title: `${product.title} | Khushboo Master`,
      description: `Gift-ready ${giftCategoryLabel(product.category).toLowerCase()} perfume pick. Price as listed — check the live price before buying.`,
      url: `${SITE_URL}/gift/${product.slug}`,
      type: "website",
    },
  };
}

export default function GiftPage({ params }: { params: { slug: string } }) {
  const product = getGiftProduct(params.slug);
  if (!product) notFound();

  const price = giftPriceLabel(product);
  const recommendations = giftRecommendations(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.imageUrl,
    url: `${SITE_URL}/gift/${product.slug}`,
    category: giftCategoryLabel(product.category),
  };

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/gifts">Gift Shop</Link> /{" "}
        <span aria-current="page">{product.title}</span>
      </nav>

      <p className="affiliate-note">{AFFILIATE_DISCLOSURE}</p>

      <div className="product-detail" style={{ marginTop: "1.5rem" }}>
        <div className="gallery-main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.title}
            loading="lazy"
            className="gift-photo gift-detail-photo"
          />
        </div>
        <div>
          {product.packagingScore >= 4 && (
            <p className="gift-badge">Gift-ready pick</p>
          )}
          <h1>{product.title}</h1>
          <p className="product-facts">
            {giftCategoryLabel(product.category)} · Gift-ready packaging
          </p>
          {price ? (
            <p className="gift-price" style={{ fontSize: "1.25rem" }}>
              {price}
              <span className="gift-price-note">
                Price as listed — check the live price before buying
              </span>
            </p>
          ) : (
            <p className="gift-price">Check the live price.</p>
          )}
          {/* Solid-perfume entries carry the same photo-fact text in
              packagingNotes and whatYouSee; show it once, under
              "What you see" below. Existing gift products have distinct
              texts, so this changes nothing for them. */}
          {giftPackagingText(product) !== product.whatYouSee && (
            <p>{giftPackagingText(product)}</p>
          )}
          <h2>What you see</h2>
          <p>{product.whatYouSee}</p>
          <p className="product-facts">As listed: {product.viralEvidence}</p>
          {product.randomScent && (
            <p className="random-warning">
              Scent/style is chosen at random — the exact scent cannot be
              guaranteed.
            </p>
          )}
          {product.affiliateUrl ? (
            <p>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="btn"
              >
                View on Temu
              </a>
            </p>
          ) : (
            <p>No buy link is listed for this product.</p>
          )}
        </div>
      </div>

      {recommendations.length > 0 && (
        <section aria-labelledby="also-like-heading" style={{ marginTop: "3rem" }}>
          <h2 id="also-like-heading">You may also like</h2>
          <div className="related-grid">
            {recommendations.map((p) => (
              <GiftCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
