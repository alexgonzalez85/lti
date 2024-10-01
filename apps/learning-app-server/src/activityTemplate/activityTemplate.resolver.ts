import * as graphql from "@nestjs/graphql";
import { ActivityTemplateResolverBase } from "./base/activityTemplate.resolver.base";
import { ActivityTemplate } from "./base/ActivityTemplate";
import { ActivityTemplateService } from "./activityTemplate.service";

@graphql.Resolver(() => ActivityTemplate)
export class ActivityTemplateResolver extends ActivityTemplateResolverBase {
  constructor(protected readonly service: ActivityTemplateService) {
    super(service);
  }
}
