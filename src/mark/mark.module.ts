import { Module } from '@nestjs/common';
import { MarkController } from './mark.controller';
import { MarkService } from './mark.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mark } from "../entities/mark.entite";

@Module({
  imports: [TypeOrmModule.forFeature([Mark])],
  controllers: [MarkController],
  providers: [MarkService]
})
export class MarkModule {}
