import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
	  inProgress: z.boolean(),
	  title: z.string(),
	  description: z.string(),
	  tags: z.array(z.string()),
	  links: z.array(
		z.object({
		  url: z.string(),
		  label: z.string(),
		})
	  ),
	  img_alt: z.string().optional(),
	  img: z.string().optional(),
	}),
	
  });


  

export const collections = {
	projects: projectsCollection,
}
	
