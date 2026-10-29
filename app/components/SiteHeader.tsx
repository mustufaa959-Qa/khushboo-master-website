import Link from "next/link";
import Logo from "./Logo";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <p className="announcement">
        Khushboo Master — fragrance videos and a growing catalogue.
      </p>
      <div className="header-main">
        <Link href="/" className="brand" aria-label="Khushboo Master — home">
          <Logo size={52} />
          <span className="brand-text">
            <span className="brand-name">Khushboo Master</span>
            <span className="brand-sub">Perfumes &amp; Fragrances</span>
          </span>
        </Link>
        <form action="/shop" method="get" role="search" className="header-search">
          <label className="visually-hidden" htmlFor="header-search">
            Search products
          </label>
          <input
            id="header-search"
            type="search"
            name="q"
            placeholder="Search products"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/shop?category=For%20Her">For Her</Link>
          </li>
          <li>
            <Link href="/shop?category=Both">For Men &amp; Women</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/shop">All Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
