import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Title is required"),
  teacher: z.string().min(1, "Teacher is required"),
  category: z.number().min(1, "Category is required"),
  duration: z.number().min(1, "Duration must be greater than 0"),
  price: z.number().min(0, "Price must be 0 or greater").nonnegative(),
  number_of_chapter: z.number().min(1, "Chapters must be greater than 0"),
  number_of_viewer: z.number().min(0, "Viewers must be 0 or greater"),
  description: z.string().min(1, "Description is required"),
});
