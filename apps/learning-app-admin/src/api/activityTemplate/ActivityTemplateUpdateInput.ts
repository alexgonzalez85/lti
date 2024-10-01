import { InputJsonValue } from "../../types";

export type ActivityTemplateUpdateInput = {
  description?: string | null;
  name?: string | null;
  templateContent?: InputJsonValue;
};
