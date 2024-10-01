import { SortOrder } from "../../util/SortOrder";

export type ActivityTemplateOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  templateContent?: SortOrder;
  updatedAt?: SortOrder;
};
