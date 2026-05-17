export default interface DashboardData {
  msg: string;
  courses: Course[] | undefined;
  courseStatus: CourseStatus[] | undefined;
}

type Course = {
  id: number | string;
  title: string;
  category: string;
  modules: number;
  duration: string;
  progress: number;
};

type CourseStatus = {
  status: string;
  title: string;
  description: string;
};
