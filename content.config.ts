import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "writing/**/*.md",
      schema: z.object({
        postId: z.number(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string(),
      }),
    }),
  },
});
