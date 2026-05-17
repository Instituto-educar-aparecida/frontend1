export interface Course {
  id: number;
  name: string;
  description: string;
  lessons: LessonProgress;
}

export interface LessonProgress {
  id: number;
  lesson_id: string;
  user_id: string;
  current_time_log: number;
  duration: number;
  percentage: number;
  completed: boolean;
}
