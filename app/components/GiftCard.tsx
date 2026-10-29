import Link from "next/link";
import {
  giftCardLine,
  giftCategoryLabel,
  giftPriceLabel,
  type GiftProduct,
} from "../data/temu-products";

export default function GiftCard({ product }: { product: GiftProduct }) {
  const price = giftPriceLabel(product);
  return (
    <article className="product-card">
      <Link
        href={`/gift/${product.slug}`}
        className="product-card-image"
        aria-label={`View ${product.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          className="gift-photo"
        />
      </Link>
      <h3 className="product-card-title">
        <Link href={`/gift/${product.slug}`}>{product.title}</Link>
      </h3>
      {product.packagingScore >= 4 && (
        <p className="gift-badge">Gift-ready pick</p>
      )}
      {price ? (
        <p className="gift-price">
          {price}
          <span className="gift-price-note">
            Price as listed — check the live price before buying
          </span>
        </p>
      ) : (
        <p className="gift-price">Check the live price.</p>
      )}
      <p className="product-card-meta">{giftCardLine(product)}</p>
      <p className="product-card-meta">{giftCategoryLabel(product.category)}</p>
      {product.affiliateUrl ? (
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="btn btn-small"
        >
          View on Temu
        </a>
      ) : null}
    </article>
  );
}
