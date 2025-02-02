import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    path: z.string(),
    h1: z.string(),
    h2: z.string(),
  }),
});

export const pages = defineCollection({
  schema: z.object({
    "global.flag": z.string(),
    "nav.changeLanguage": z.string(),
    "nav.available": z.string(),
    "nav.components": z.string(),
    "index.seoTitle": z.string(),
    "index.seoDescription": z.string(),
    "index.h1": z.string(),
    "index.h2": z.string(),
    "index.p1": z.string(),
    "index.p2": z.string(),
    "index.p3": z.string(),
  }),
});

export const collections = {
  blog,
  pages,
};
