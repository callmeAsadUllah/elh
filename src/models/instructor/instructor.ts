import { Course } from "../course/course";

export interface Instructor {
  id: number;
  name: string;
  courses: Course[]
}
