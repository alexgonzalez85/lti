import { ScoreCreateNestedManyWithoutActivitiesInput } from "./ScoreCreateNestedManyWithoutActivitiesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ActivityCreateInput = {
  assignedDate?: Date | null;
  scores?: ScoreCreateNestedManyWithoutActivitiesInput;
  teacher?: TeacherWhereUniqueInput | null;
  templateId?: string | null;
};
