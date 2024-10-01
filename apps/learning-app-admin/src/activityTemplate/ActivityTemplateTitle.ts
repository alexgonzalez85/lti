import { ActivityTemplate as TActivityTemplate } from "../api/activityTemplate/ActivityTemplate";

export const ACTIVITYTEMPLATE_TITLE_FIELD = "name";

export const ActivityTemplateTitle = (record: TActivityTemplate): string => {
  return record.name?.toString() || String(record.id);
};
