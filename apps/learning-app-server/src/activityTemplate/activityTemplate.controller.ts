import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivityTemplateService } from "./activityTemplate.service";
import { ActivityTemplateControllerBase } from "./base/activityTemplate.controller.base";

@swagger.ApiTags("activityTemplates")
@common.Controller("activityTemplates")
export class ActivityTemplateController extends ActivityTemplateControllerBase {
  constructor(protected readonly service: ActivityTemplateService) {
    super(service);
  }
}
