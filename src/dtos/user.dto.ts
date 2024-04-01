import { RoleEnum } from "../enums/role.enum";

export class UserDto{
  email: string
  password: string
  role: RoleEnum[]
}