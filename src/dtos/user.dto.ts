import { RoleEnum } from "../enums/role.enum";
import { Role } from "../entities/role.entitie";

export class UserDto{
  email: string
  password: string
  group: string
}