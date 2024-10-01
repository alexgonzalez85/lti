import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  activityId?: SortOrder;
  createdAt?: SortOrder;
  dateRecorded?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
