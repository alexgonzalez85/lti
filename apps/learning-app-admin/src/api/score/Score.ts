import { Activity } from "../activity/Activity";
import { Student } from "../student/Student";

export type Score = {
  activity?: Activity | null;
  createdAt: Date;
  dateRecorded: Date | null;
  id: string;
  score: number | null;
  student?: Student | null;
  updatedAt: Date;
};
