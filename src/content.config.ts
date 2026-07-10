import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['es', 'va', 'en']),
  }),
});

const institutions = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    url: z.string().url().optional(),
    alt: z.string(),
    weight: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.string().optional(),
    ageRange: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
    lang: z.enum(['es', 'va', 'en']),
  }),
});

export const collections = { news, institutions, courses };
