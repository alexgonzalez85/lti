import { Activity } from "../activity/Activity";

export type Teacher = {
  activities?: Array<Activity>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  updatedAt: Date;
};
