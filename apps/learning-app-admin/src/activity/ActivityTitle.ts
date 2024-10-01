import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "templateId";

export const ActivityTitle = (record: TActivity): string => {
  return record.templateId?.toString() || String(record.id);
};
