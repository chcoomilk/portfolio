// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL, PORT } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: "/portfolio",
  integrations: [mdx(), sitemap()],
  server: { port: +PORT || undefined },
  publicDir: "./static",
  vite: {
    plugins: [tailwindcss()],
  },
});
