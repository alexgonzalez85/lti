import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScoreWhereInput = {
  activity?: ActivityWhereUniqueInput;
  dateRecorded?: DateTimeNullableFilter;
  id?: StringFilter;
  score?: FloatNullableFilter;
  student?: StudentWhereUniqueInput;
};
