import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const events = defineCollection({
  loader: file("events/events.json"),
  schema: z.object({
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    title: z.string(),
    location: z.string(),
    locationHref: z.string(),
    description: z.string().optional(),
    ticketsHref: z.string(),
    imageSrc: z.string().optional(),
  }),
});

export const collections = { events };
