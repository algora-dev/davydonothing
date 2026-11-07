import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.davydonothing.com";
  const routes = ["", "/shop", "/farm", "/raffleticket", "/pwof"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
