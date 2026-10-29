import Link from "next/link";
import type { Product } from "../data/products";
import Bottle from "./Bottle";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        href={`/product/${product.slug}`}
        className="product-card-image"
        aria-label={`View ${product.title}`}
      >
        <Bottle hue={product.hue} title={product.title} />
      </Link>
      <h3 className="product-card-title">
        <Link href={`/product/${product.slug}`}>{product.title}</Link>
      </h3>
      <p className="product-card-meta">
        {product.dateLabel} · {product.views} views
      </p>
      <p className="product-card-note">Affiliate link not yet added</p>
      <Link href={`/product/${product.slug}`} className="btn btn-small">
        View product
      </Link>
    </article>
  );
}
