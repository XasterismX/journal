import { Module } from '@nestjs/common';
import { MarkController } from './mark.controller';
import { MarkService } from './mark.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mark } from "../entities/mark.entite";
import { LessonModule } from "../lesson/lesson.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Mark]), LessonModule, UserModule],
  controllers: [MarkController],
  providers: [MarkService]
})
export class MarkModule {}
