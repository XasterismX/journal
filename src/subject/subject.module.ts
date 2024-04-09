import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subject } from "../entities/subject.entitie";
import { SubjectService } from "./subject.service";
import { SubjectController } from "./subject.controller";
import { RoleModule } from "../role/role.module";

@Module({
  imports: [TypeOrmModule.forFeature([Subject]), RoleModule],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService]
})
export class SubjectModule {
}
