import { RoleEnum } from "../enums/role.enum";
import { Role } from "../entities/role.entitie";

export class UserDto{
  id:number
  email: string
  password: string
  group: string
}