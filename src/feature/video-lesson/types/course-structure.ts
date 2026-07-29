import { z } from "zod";

export const lessonStatusSchema = z.enum(["LOCKED", "AVAILABLE", "COMPLETED"]);
export type LessonStatus = z.infer<typeof lessonStatusSchema>;

export const structureLessonSchema = z.object({
  id: z.string().or(z.number()),
  title: z.string(),
  description: z.string().nullable(),
  video_url: z.string().nullable(),
  duration_seconds: z.number(),
  status: lessonStatusSchema,
});
export type StructureLesson = z.infer<typeof structureLessonSchema>;

export const structureActivitySchema = z
  .object({
    id: z.string().or(z.number()),
    title: z.string(),
    question_count: z.number(),
    minimum_grade: z.number().or(z.string()),
    status: z.string(),
    grade: z.number().nullable().or(z.string().nullable()),
    passed: z.boolean().nullable(),
  })
  .nullable();
export type StructureActivity = z.infer<typeof structureActivitySchema>;

export const structureModuleSchema = z.object({
  id: z.string().or(z.number()),
  name: z.string(),
  order: z.number(),
  locked: z.boolean(),
  lessons: z.array(structureLessonSchema),
  activity: structureActivitySchema,
});
export type StructureModule = z.infer<typeof structureModuleSchema>;

export const courseStructureSchema = z.object({
  course_id: z.string().or(z.number()),
  course_title: z.string(),
  modules: z.array(structureModuleSchema),
});
export type CourseStructure = z.infer<typeof courseStructureSchema>;
