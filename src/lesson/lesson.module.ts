import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "../entities/lesson.entite";
import { SubjectModule } from "../subject/subject.module";
import { RoleModule } from "../role/role.module";

@Module({
  imports:[TypeOrmModule.forFeature([Lesson]), SubjectModule, RoleModule],
  controllers: [LessonController],
  providers: [LessonService],
  exports:[LessonService]
})
export class LessonModule {}
