import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Page not found</h1>
      <p>The page you asked for does not exist on Khushboo Master.</p>
      <p>
        <Link href="/" className="btn">
          Go to the homepage
        </Link>{" "}
        <Link href="/shop" className="btn btn-ghost">
          Browse all products
        </Link>
      </p>
    </div>
  );
}
