import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScoreCreateInput = {
  activity?: ActivityWhereUniqueInput | null;
  dateRecorded?: Date | null;
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
};
