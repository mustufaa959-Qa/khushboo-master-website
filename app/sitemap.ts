import { PRODUCTS, SITE_URL } from "./data/products";
import { TEMU_PRODUCTS } from "./data/temu-products";

export default function sitemap() {
  const routes = [
    "",
    "/shop",
    "/about",
    ...PRODUCTS.map((p) => `/product/${p.slug}`),
  ];
  const giftRoutes = [
    "/gifts",
    ...TEMU_PRODUCTS.map((p) => `/gift/${p.slug}`),
  ];
  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...giftRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date("2026-10-29"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
