import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { getProduct, PRODUCTS, SITE_URL } from "../../data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.title,
    description: `Khushboo Master video from ${product.dateLabel} with ${product.views} recorded views. Watch it on YouTube. Affiliate link not yet added.`,
    openGraph: {
      title: `${product.title} | Khushboo Master`,
      description: `Khushboo Master video from ${product.dateLabel}. Watch it on YouTube.`,
      url: `${SITE_URL}/product/${product.slug}`,
      type: "website",
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) =>
      p.slug !== product.slug &&
      p.categories.some((c) => product.categories.includes(c)),
  ).slice(0, 3);
  const relatedFilled =
    related.length >= 3
      ? related
      : [
          ...related,
          ...PRODUCTS.filter(
            (p) => p.slug !== product.slug && !related.includes(p),
          ),
        ].slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    url: `${SITE_URL}/product/${product.slug}`,
    category: product.categories.join(", "),
  };

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> /{" "}
        <span aria-current="page">{product.title}</span>
      </nav>

      <ProductDetailClient product={product} />

      <section aria-labelledby="related-heading" style={{ marginTop: "3rem" }}>
        <h2 id="related-heading">Related products</h2>
        <div className="related-grid">
          {relatedFilled.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
