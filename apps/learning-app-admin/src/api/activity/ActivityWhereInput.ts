import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ActivityWhereInput = {
  assignedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  scores?: ScoreListRelationFilter;
  teacher?: TeacherWhereUniqueInput;
  templateId?: StringNullableFilter;
};
