import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content', 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        siteUrl: z.string().optional(),
        repoUrl: z.string().url().optional(),
    }),
});

export const collections = {
  'projects': projectsCollection,
};