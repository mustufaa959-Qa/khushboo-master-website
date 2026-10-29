"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Bottle from "./components/Bottle";
import GiftCard from "./components/GiftCard";
import Logo from "./components/Logo";
import ProductCard from "./components/ProductCard";
import Reveal from "./components/Reveal";
import {
  BEST_SELLERS,
  CATEGORIES,
  CHANNEL_URL,
  NEW_ARRIVALS,
  PRODUCTS,
  SITE_URL,
} from "./data/products";
import { GIFT_READY_PICKS } from "./data/temu-products";

const SLIDES = [
  {
    kicker: "Khushboo Master",
    title: "Discover your signature scent",
    text: "Perfume, body spray and room fragrance videos from the Khushboo Master channel — start with the most-watched videos below.",
    cta: { label: "Browse all products", href: "/shop" },
    cta2: { label: "Watch on YouTube", href: CHANNEL_URL },
    hue: 45,
  },
  {
    kicker: "14 videos",
    title: "One channel, all about fragrance",
    text: "The catalogue on this site lists exactly the 14 videos published on the channel, with the date and view count recorded for each one.",
    cta: { label: "See best sellers", href: "/shop?sort=views" },
    cta2: { label: "About the channel", href: "/about" },
    hue: 200,
  },
  {
    kicker: "New arrivals",
    title: "The most recent videos, first",
    text: "The newest video in the catalogue is from September 2022. Browse the shop sorted by date to see the most recent videos first.",
    cta: { label: "Shop newest first", href: "/shop?sort=date" },
    cta2: { label: "Browse all products", href: "/shop" },
    hue: 330,
  },
];

const CIRCLES = [
  { label: "For Her", href: "/shop?category=For%20Her", initial: "H" },
  { label: "Both", href: "/shop?category=Both", initial: "B" },
  { label: "Body Spray", href: "/shop?category=Body%20Spray", initial: "S" },
  { label: "Room", href: "/shop?category=Room", initial: "R" },
  { label: "Best Sellers", href: "/shop?sort=views", initial: "★" },
  { label: "New Arrivals", href: "/shop?sort=date", initial: "N" },
];

type Tab = "best" | "new" | "all";

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [tab, setTab] = useState<Tab>("best");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      6000,
    );
    return () => window.clearInterval(id);
  }, []);

  const shown =
    tab === "best" ? BEST_SELLERS : tab === "new" ? NEW_ARRIVALS : PRODUCTS;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Khushboo Master products",
    itemListElement: BEST_SELLERS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/product/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="hero" aria-roledescription="carousel" aria-label="Featured">
        {SLIDES.map((s, i) => (
          <div key={s.title} className={`hero-slide ${i === slide ? "is-active" : ""}`} aria-hidden={i !== slide}>
            <div className="hero-inner">
              <div>
                <p className="hero-kicker">{s.kicker}</p>
                <h1 className="hero-title">{s.title}</h1>
                <p className="hero-text">{s.text}</p>
                <div className="hero-cta">
                  <Link href={s.cta.href} className="btn btn-gold">
                    {s.cta.label}
                  </Link>
                  {s.cta2.href.startsWith("http") ? (
                    <a href={s.cta2.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: "#fff" }}>
                      {s.cta2.label}
                    </a>
                  ) : (
                    <Link href={s.cta2.href} className="btn btn-ghost" style={{ color: "#fff" }}>
                      {s.cta2.label}
                    </Link>
                  )}
                </div>
              </div>
              <div className="hero-art">
                <Bottle hue={s.hue} title="Khushboo Master" />
              </div>
            </div>
          </div>
        ))}
        <div className="hero-controls">
          <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={() => setSlide((slide + SLIDES.length - 1) % SLIDES.length)}>
            ‹
          </button>
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`hero-dot ${i === slide ? "is-active" : ""}`}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              onClick={() => setSlide(i)}
            />
          ))}
          <button type="button" className="hero-arrow" aria-label="Next slide" onClick={() => setSlide((slide + 1) % SLIDES.length)}>
            ›
          </button>
        </div>
      </section>

      <section className="section" aria-label="Browse by category">
        <div className="container">
          <ul className="circle-row">
            {CIRCLES.map((c) => (
              <li key={c.label}>
                <Link href={c.href} className="circle-link">
                  <span className="circle" aria-hidden="true">{c.initial}</span>
                  <span className="circle-label">{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Product Categories</p>
            <h2 id="categories-heading">Browse the catalogue</h2>
            <p>Categories are taken only from what each video title itself says.</p>
          </div>
          <div className="category-grid">
            {CATEGORIES.filter((c) => c !== "All").map((c) => {
              const count = PRODUCTS.filter((p) => p.categories.includes(c)).length;
              return (
                <Link key={c} href={`/shop?category=${encodeURIComponent(c)}`} className="category-card">
                  <h3>{c}</h3>
                  <p>
                    {count} {count === 1 ? "video" : "videos"} in this category
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="favourite-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Most Popular Products</p>
            <h2 id="favourite-heading">Favourite Products</h2>
            <p>Best Sellers are the 4 most-viewed videos. New Arrivals are the 3 most recent.</p>
          </div>
          <div className="tabs" role="tablist" aria-label="Product lists">
            <button type="button" role="tab" aria-selected={tab === "best"} className={`tab-btn ${tab === "best" ? "is-active" : ""}`} onClick={() => setTab("best")}>
              Best Sellers
            </button>
            <button type="button" role="tab" aria-selected={tab === "new"} className={`tab-btn ${tab === "new" ? "is-active" : ""}`} onClick={() => setTab("new")}>
              New Arrivals
            </button>
            <button type="button" role="tab" aria-selected={tab === "all"} className={`tab-btn ${tab === "all" ? "is-active" : ""}`} onClick={() => setTab("all")}>
              All Products
            </button>
          </div>
          <div className="product-grid">
            {shown.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gift-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Gift Shop</p>
            <h2 id="gift-heading">Gift-ready picks</h2>
            <p>
              Beautiful bottles and gift sets, chosen for gift-ready
              packaging. Prices as listed — check the live price before
              buying.
            </p>
          </div>
          <div className="product-grid">
            {GIFT_READY_PICKS.map((p) => (
              <GiftCard key={p.slug} product={p} />
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/gifts" className="btn">
              Browse the Gift Shop
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <ul className="facts-strip">
            <li><strong>14</strong><span>Videos in the catalogue</span></li>
            <li><strong>922</strong><span>Channel subscribers</span></li>
            <li><strong>Sep 2022</strong><span>Last upload</span></li>
            <li><strong>890</strong><span>Views on the most-viewed video</span></li>
          </ul>
          <Reveal>
            <div className="about-block">
              <div className="about-logo">
                <Logo size={150} />
              </div>
              <div>
                <p className="eyebrow">About Khushboo Master</p>
                <h2 id="about-heading">More than a catalogue</h2>
                <p>
                  Khushboo Master is a fragrance channel about perfumes,
                  fragrances, attars, reviews and recommendations. This
                  website lists its 14 published videos so visitors can find
                  a video, watch it on YouTube, and — once affiliate
                  products are supplied — follow an affiliate link from the
                  same page.
                </p>
                <p>
                  <Link href="/about" className="btn">More about us</Link>{" "}
                  <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Watch on YouTube
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Latest Videos</p>
            <h2 id="latest-heading">The most recent videos</h2>
          </div>
          <ul className="video-list">
            {NEW_ARRIVALS.map((p) => (
              <li key={p.slug}>
                <a href={p.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <span>{p.title}</span>
                  <span>{p.dateLabel} · {p.views} views</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
