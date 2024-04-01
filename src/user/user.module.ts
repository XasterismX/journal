import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entitie";
import { Mark } from "../entities/mark.entite";

@Module({
  imports:[TypeOrmModule.forFeature([User, Mark])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
