import { InputJsonValue } from "../../types";

export type ActivityTemplateCreateInput = {
  description?: string | null;
  name?: string | null;
  templateContent?: InputJsonValue;
};
