import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AFFILIATE_DISCLOSURE, GIFT_CATEGORIES } from "../data/temu-products";
import GiftsClient from "./GiftsClient";

export const metadata: Metadata = {
  title: "Gift Shop — Gift-Ready Perfume Picks",
  description:
    "Gift-ready perfume picks from Khushboo Master: beautiful bottles and gift sets chosen for gift-ready packaging. Prices as listed — check the live price before buying.",
  openGraph: {
    title: "Gift Shop — Gift-Ready Perfume Picks | Khushboo Master",
    description:
      "Beautiful bottles and gift sets chosen for gift-ready packaging. Prices as listed — check the live price before buying.",
  },
};

export default function GiftsPage() {
  return (
    <div className="container">
      <h1>Gift Shop</h1>
      <p>
        Gift-ready perfume picks with beautiful bottles and gift packaging,
        chosen for gifting occasions. Choose a gift-ready pick, check the
        live price, and order through the link.
      </p>
      <p className="affiliate-note">{AFFILIATE_DISCLOSURE}</p>

      <ul className="circle-row" style={{ margin: "1.5rem 0" }}>
        {GIFT_CATEGORIES.filter((c) => c.value !== "all").map((c) => (
          <li key={c.value}>
            <Link
              href={`/gifts?category=${encodeURIComponent(c.value)}`}
              className="circle-link"
            >
              <span className="circle" aria-hidden="true">
                {c.label.charAt(0)}
              </span>
              <span className="circle-label">{c.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Suspense
        fallback={
          <div>
            <p>Loading gift shop…</p>
          </div>
        }
      >
        <GiftsClient />
      </Suspense>
    </div>
  );
}
