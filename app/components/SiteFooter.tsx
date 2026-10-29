import Link from "next/link";
import { CHANNEL_URL } from "../data/products";
import { AFFILIATE_DISCLOSURE } from "../data/temu-products";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size={64} />
          <p className="footer-name">Khushboo Master</p>
          <p>{AFFILIATE_DISCLOSURE}</p>
          <p>
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </p>
        </div>
        <nav aria-label="Footer — explore">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/gifts">Gift Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer — categories">
          <h2>Categories</h2>
          <ul>
            <li>
              <Link href="/shop?category=For%20Her">For Her</Link>
            </li>
            <li>
              <Link href="/shop?category=Both">For Men &amp; Women</Link>
            </li>
            <li>
              <Link href="/shop?category=Body%20Spray">Body Spray</Link>
            </li>
            <li>
              <Link href="/shop?category=Room">Room</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer — gift shop">
          <h2>Gift Shop</h2>
          <ul>
            <li>
              <Link href="/gifts">All Gift Picks</Link>
            </li>
            <li>
              <Link href="/gifts?category=men">Men</Link>
            </li>
            <li>
              <Link href="/gifts?category=women">Women</Link>
            </li>
            <li>
              <Link href="/gifts?category=unisex">Unisex</Link>
            </li>
            <li>
              <Link href="/gifts?category=gift%20set">Gift Sets</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer — site">
          <h2>Site</h2>
          <ul>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
            <li>
              <Link href="/robots.txt">Robots</Link>
            </li>
            <li>
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                YouTube channel
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer-base">
        © {new Date().getFullYear()} Khushboo Master. Video details are
        limited to verified video facts; gift details come only from the
        supplier listing file.
      </p>
    </footer>
  );
}
