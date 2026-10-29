import type { Metadata } from "next";
import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop — All Products",
  description:
    "Browse all 14 Khushboo Master fragrance videos, with working search, category filtering and sorting by date, views or title.",
  openGraph: {
    title: "Shop — All Products | Khushboo Master",
    description:
      "Browse all 14 Khushboo Master fragrance videos, with search, category filtering and sorting.",
  },
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container"><p>Loading shop…</p></div>}>
      <ShopClient />
    </Suspense>
  );
}
