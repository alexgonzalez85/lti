import { Module } from "@nestjs/common";
import { ActivityTemplateModuleBase } from "./base/activityTemplate.module.base";
import { ActivityTemplateService } from "./activityTemplate.service";
import { ActivityTemplateController } from "./activityTemplate.controller";
import { ActivityTemplateResolver } from "./activityTemplate.resolver";

@Module({
  imports: [ActivityTemplateModuleBase],
  controllers: [ActivityTemplateController],
  providers: [ActivityTemplateService, ActivityTemplateResolver],
  exports: [ActivityTemplateService],
})
export class ActivityTemplateModule {}
