"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "../../data/products";
import Bottle from "../../components/Bottle";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [variant, setVariant] = useState(0);
  const [tab, setTab] = useState<"description" | "details" | "reviews">("description");

  return (
    <>
      <div className="product-detail">
        <div className="gallery-main">
          <Bottle hue={product.hue} title={product.title} variant={variant} />
          <div className="gallery-thumbs" role="group" aria-label="Illustration views">
            {[0, 1, 2].map((v) => (
              <button
                key={v}
                type="button"
                className={`gallery-thumb ${v === variant ? "is-active" : ""}`}
                aria-label={`Illustration view ${v + 1}`}
                aria-pressed={v === variant}
                onClick={() => setVariant(v)}
              >
                <Bottle hue={product.hue} title={product.title} variant={v} />
              </button>
            ))}
          </div>
          <p className="product-card-meta">
            Original illustration. It is not a photo of a real product.
          </p>
        </div>

        <div>
          <h1>{product.title}</h1>
          <p className="product-facts">
            Video date: {product.dateLabel} · Views recorded: {product.views} ·
            Category: {product.categories.join(", ")}
          </p>
          <p className="affiliate-note">Affiliate link not yet added</p>
          <p>
            <a href={product.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Watch on YouTube
            </a>{" "}
            <Link href="/shop" className="btn btn-ghost">
              Back to shop
            </Link>
          </p>
        </div>
      </div>

      <div className="detail-tabs">
        <div className="detail-tab-list" role="tablist" aria-label="Product information">
          <button type="button" role="tab" aria-selected={tab === "description"} className={`tab-btn ${tab === "description" ? "is-active" : ""}`} onClick={() => setTab("description")}>
            Description
          </button>
          <button type="button" role="tab" aria-selected={tab === "details"} className={`tab-btn ${tab === "details" ? "is-active" : ""}`} onClick={() => setTab("details")}>
            Details
          </button>
          <button type="button" role="tab" aria-selected={tab === "reviews"} className={`tab-btn ${tab === "reviews" ? "is-active" : ""}`} onClick={() => setTab("reviews")}>
            Reviews (0)
          </button>
        </div>
        <div className="detail-panel">
          {tab === "description" && (
            <div>
              <p>
                This page lists the Khushboo Master video titled “{product.title}”.
                No product description, fragrance notes, price or availability
                have been verified from the video, so none are shown here.
                Watch the video on YouTube for the full content.
              </p>
              <p>
                <a href={product.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  Watch this video on YouTube
                </a>
              </p>
            </div>
          )}
          {tab === "details" && (
            <table className="spec-table">
              <caption className="visually-hidden">Verified facts about this video</caption>
              <tbody>
                <tr><th scope="row">Video title</th><td>{product.title}</td></tr>
                <tr><th scope="row">Video date</th><td>{product.dateLabel}</td></tr>
                <tr><th scope="row">Views recorded</th><td>{product.views}</td></tr>
                <tr><th scope="row">Category</th><td>{product.categories.join(", ")}</td></tr>
                <tr><th scope="row">Price</th><td>Not yet added</td></tr>
                <tr><th scope="row">Affiliate link</th><td>Not yet added</td></tr>
              </tbody>
            </table>
          )}
          {tab === "reviews" && (
            <p>No reviews yet. This site does not collect reviews.</p>
          )}
        </div>
      </div>
    </>
  );
}
