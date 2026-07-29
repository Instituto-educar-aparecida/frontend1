import api from "@/lib/axios";
import { BackendRoutes } from "@/types/backend-routes";
import {
  courseStructureSchema,
  type CourseStructure,
} from "../types/course-structure";

export const courseStructureService = {
  get: async (courseId: string | number): Promise<CourseStructure> => {
    const { data } = await api.get(
      `${BackendRoutes.STUDENT_COURSES}/${courseId}/structure`,
    );
    return courseStructureSchema.parse(data.data);
  },
};

export interface QuizQuestion {
  id: string | number;
  description: string;
  image_url: string | null;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  option_5: string | null;
  type: "objective";
}

export interface QuizOpenQuestion {
  id: string | number;
  description: string;
  image_url: string | null;
  type: "open";
}

export interface QuizQuestionsResponse {
  objective_questions: QuizQuestion[];
  open_questions: QuizOpenQuestion[];
}

export interface SubmitAnswer {
  question_id: string | number;
  selected_option: number;
}

export interface SubmitResult {
  progress: {
    id: string | number;
    status: string;
    grade: number | null;
  };
  automatic_correction: {
    total_objective_questions: number;
    correct_answers: number;
    grade: number | null;
    pending_open_questions: number;
    passed: boolean | null;
    minimum_grade: number;
  };
}

export const activityService = {
  getQuestions: async (
    activityId: string | number,
  ): Promise<QuizQuestionsResponse> => {
    const { data } = await api.get(
      `${BackendRoutes.ACTIVITIES}/${activityId}/questions`,
    );
    return data.data;
  },

  submit: async (
    activityId: string | number,
    answers: SubmitAnswer[],
  ): Promise<SubmitResult> => {
    const { data } = await api.post(
      `${BackendRoutes.ACTIVITIES}/${activityId}/submit`,
      { answers },
    );
    return data.data;
  },
};

export const certificateService = {
  issue: async (courseId: string | number) => {
    const { data } = await api.post(
      `${BackendRoutes.STUDENT_COURSES}/${courseId}/certificate`,
    );
    return data.data;
  },
};
