import { Score } from "../score/Score";

export type Student = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  scores?: Array<Score>;
  updatedAt: Date;
};
