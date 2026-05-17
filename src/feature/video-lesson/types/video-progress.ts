// types/video-progress.ts
import { z } from "zod";

export const videoProgressSchema = z.object({
  videoId: z.string(),
  currentTime: z.number(),
  duration: z.number(),
  percentage: z.number(),
  completed: z.boolean(),
  event: z.enum(["pause", "exit"]),
});

export type VideoProgressPayload = z.infer<typeof videoProgressSchema>;

export const videoProgressResponseSchema = z.object({
  lessonId: z.string().or(z.number()),
  currentTime: z.number(),
  completed: z.boolean(),
  percentage: z.number(),
});

export type VideoProgressResponse = z.infer<typeof videoProgressResponseSchema>;
