import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entitie";
import { RoleModule } from "../role/role.module";
import { Role } from "../entities/role.entitie";

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), RoleModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {
}
