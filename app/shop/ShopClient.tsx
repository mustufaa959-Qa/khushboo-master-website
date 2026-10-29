"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";

type SortKey = "date" | "views" | "title";

export default function ShopClient() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "All");
  const [sort, setSort] = useState<SortKey>(
    params.get("sort") === "views"
      ? "views"
      : params.get("sort") === "title"
        ? "title"
        : "date",
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = PRODUCTS.filter((p) => {
      const inCategory =
        category === "All" || p.categories.includes(category);
      const matchesQuery = q === "" || p.title.toLowerCase().includes(q);
      return inCategory && matchesQuery;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "views") return b.views - a.views;
      if (sort === "title") return a.title.localeCompare(b.title);
      return b.date.localeCompare(a.date);
    });
  }, [query, category, sort]);

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setSort("date");
  }

  return (
    <div className="container">
      <h1>Shop</h1>
      <p>
        All 14 videos from the Khushboo Master channel. Use search, category
        and sorting to narrow the list. Prices and affiliate links have not
        been added yet.
      </p>

      <div className="shop-controls">
        <div className="field">
          <label htmlFor="shop-search">Search products</label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <label htmlFor="shop-category">Category</label>
          <select
            id="shop-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="shop-sort">Sort by</label>
          <select
            id="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="date">Newest first</option>
            <option value="views">Most viewed</option>
            <option value="title">Title A–Z</option>
          </select>
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        {results.length} {results.length === 1 ? "product" : "products"} shown
      </p>

      {results.length === 0 ? (
        <div className="empty-state">
          <h2>No products match your search</h2>
          <p>Try a different search term or category.</p>
          <button type="button" className="btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="product-grid" style={{ paddingBottom: "3rem" }}>
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
