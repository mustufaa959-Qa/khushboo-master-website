"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import GiftCard from "../components/GiftCard";
import {
  GIFT_CATEGORIES,
  TEMU_PRODUCTS,
  giftPriceValue,
} from "../data/temu-products";

type SortKey = "score" | "price-asc" | "price-desc";

export default function GiftsClient() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "all";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(
    GIFT_CATEGORIES.some((c) => c.value === initialCategory)
      ? initialCategory
      : "all",
  );
  const [sort, setSort] = useState<SortKey>("score");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = TEMU_PRODUCTS.map((p, index) => ({ p, index })).filter(
      ({ p }) => {
        const inCategory = category === "all" || p.category === category;
        const matchesQuery = q === "" || p.title.toLowerCase().includes(q);
        return inCategory && matchesQuery;
      },
    );
    filtered.sort((a, b) => {
      if (sort === "price-asc" || sort === "price-desc") {
        const av = giftPriceValue(a.p);
        const bv = giftPriceValue(b.p);
        // Products without a price sort last in both directions.
        if (av === null && bv === null) return a.index - b.index;
        if (av === null) return 1;
        if (bv === null) return -1;
        if (av !== bv) return sort === "price-asc" ? av - bv : bv - av;
        return a.index - b.index;
      }
      // Gift-ready first: packaging score highest first, file order breaks ties.
      if (b.p.packagingScore !== a.p.packagingScore) {
        return b.p.packagingScore - a.p.packagingScore;
      }
      return a.index - b.index;
    });
    return filtered.map(({ p }) => p);
  }, [query, category, sort]);

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setSort("score");
  }

  return (
    <>
      <div className="shop-controls">
        <div className="field">
          <label htmlFor="gifts-search">Search gift picks</label>
          <input
            id="gifts-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <label htmlFor="gifts-category">Category</label>
          <select
            id="gifts-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {GIFT_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="gifts-sort">Sort by</label>
          <select
            id="gifts-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="score">Gift-ready first</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        {results.length} {results.length === 1 ? "gift pick" : "gift picks"}{" "}
        shown
      </p>

      {results.length === 0 ? (
        <div className="empty-state">
          <h2>No gift picks match your search</h2>
          <p>Try a different search term or category.</p>
          <button type="button" className="btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="product-grid" style={{ paddingBottom: "3rem" }}>
          {results.map((p) => (
            <GiftCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </>
  );
}
