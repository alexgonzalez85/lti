import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  activities?: ActivityListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
};
