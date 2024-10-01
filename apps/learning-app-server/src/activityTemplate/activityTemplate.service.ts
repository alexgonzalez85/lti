import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActivityTemplateServiceBase } from "./base/activityTemplate.service.base";

@Injectable()
export class ActivityTemplateService extends ActivityTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
