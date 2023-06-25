import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
	  inProgress: z.boolean(),
	  title: z.string(),
	  tags: z.array(z.string()),
	  web_url: z.string().optional(),
	  links: z.array(
		z.object({
		  url: z.string(),
		  label: z.string(),
		})
	  ),
	  img: z.string().optional(),
	  img_alt: z.string().optional(),
	}),
  });
  

export const collections = {
	projects: projectsCollection,
};
