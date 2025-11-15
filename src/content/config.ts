import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		intro: z.string(),
	}),
});

export const collections = { blog };
