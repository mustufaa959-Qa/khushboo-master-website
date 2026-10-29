import { PRODUCTS, SITE_URL } from "./data/products";

export default function sitemap() {
  const routes = [
    "",
    "/shop",
    "/about",
    ...PRODUCTS.map((p) => `/product/${p.slug}`),
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-10-28"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
