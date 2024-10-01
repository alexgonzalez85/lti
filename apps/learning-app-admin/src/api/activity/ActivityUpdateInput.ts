import { ScoreUpdateManyWithoutActivitiesInput } from "./ScoreUpdateManyWithoutActivitiesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ActivityUpdateInput = {
  assignedDate?: Date | null;
  scores?: ScoreUpdateManyWithoutActivitiesInput;
  teacher?: TeacherWhereUniqueInput | null;
  templateId?: string | null;
};
