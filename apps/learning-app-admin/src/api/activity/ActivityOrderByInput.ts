import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  assignedDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  teacherId?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
};
