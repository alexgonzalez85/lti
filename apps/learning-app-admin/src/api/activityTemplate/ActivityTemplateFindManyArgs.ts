import { ActivityTemplateWhereInput } from "./ActivityTemplateWhereInput";
import { ActivityTemplateOrderByInput } from "./ActivityTemplateOrderByInput";

export type ActivityTemplateFindManyArgs = {
  where?: ActivityTemplateWhereInput;
  orderBy?: Array<ActivityTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
