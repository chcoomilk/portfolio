import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  base: "/portfolio/",
  integrations: [mdx(), sitemap(), tailwind()],
  server: {
    port: +process.env.PORT || undefined,
  },
  outDir: "./public",
  publicDir: "./static",
});
