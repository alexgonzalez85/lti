import { JsonValue } from "type-fest";

export type ActivityTemplate = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  templateContent: JsonValue;
  updatedAt: Date;
};
