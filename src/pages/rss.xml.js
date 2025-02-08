import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

export const GET = async (context) =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./projects/**/*.md")),
  });
