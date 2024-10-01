import { Score } from "../score/Score";
import { Teacher } from "../teacher/Teacher";

export type Activity = {
  assignedDate: Date | null;
  createdAt: Date;
  id: string;
  scores?: Array<Score>;
  teacher?: Teacher | null;
  templateId: string | null;
  updatedAt: Date;
};
