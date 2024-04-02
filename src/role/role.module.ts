import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "../entities/role.entitie";

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleService],
  imports:[TypeOrmModule.forFeature([Role])]
})
export class RoleModule {}
