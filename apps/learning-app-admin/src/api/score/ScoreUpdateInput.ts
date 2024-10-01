import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScoreUpdateInput = {
  activity?: ActivityWhereUniqueInput | null;
  dateRecorded?: Date | null;
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
};
