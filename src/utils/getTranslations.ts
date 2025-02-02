import { getCollection } from "astro:content";
import type { AstroGlobal } from "astro";

const getTranslations = async (astro: AstroGlobal) => {
  const [, currentLang, ...slug] = astro.url.pathname.split("/");
  const pages = await getCollection("pages");
  return pages.find((page) => page.slug == currentLang)!.data;
};

export default getTranslations;
