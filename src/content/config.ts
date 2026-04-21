import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['fruit', 'vegetables', 'dairy-eggs', 'bakery', 'pantry', 'preserves']),
    origin: z.string(),
    supplier: z.string().optional(),
    price: z.number().positive(),
    unit: z.string(), // e.g. 'kg', 'bunch', '200g', 'dozen'
    image: z.string(), // path under /public, e.g. /images/products/yorkshire-apples.jpg
    imageAlt: z.string(),
    isLocal: z.boolean().default(true),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    season: z.array(z.enum(['spring', 'summer', 'autumn', 'winter'])).default([]),
  }),
});

const makers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    speciality: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    website: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

const seasonal = defineCollection({
  type: 'content',
  schema: z.object({
    season: z.enum(['spring', 'summer', 'autumn', 'winter']),
    title: z.string(),
    items: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    active: z.boolean().default(false),
  }),
});

export const collections = { products, makers, seasonal };
