import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleEnum } from "../enums/role.enum";

@Controller('role')
export class RoleController {

  constructor(private roleService: RoleService) {
  }

  @Post("create")
  async createRole(@Body() role: string){
    console.log(role["role"])
    let roleEnum: RoleEnum
    switch (role["role"]) {
      case "student":
        roleEnum = RoleEnum.STUDENT
        break
      case "teacher":
        roleEnum = RoleEnum.TEACHER
        break
      case "elder":
        roleEnum = RoleEnum.ELDER
        break
      default:
        throw new HttpException("Неизвестная роль, выбирете из предложенных", HttpStatus.BAD_REQUEST)

    }
    return await this.roleService.createRole(roleEnum)
  }
  @Get("/all")
  async getAllRole(){
    return this.roleService.getAllRole()
  }
  @Get(":id")
  async getRoleById(@Param("id") id: number){
    return this.roleService.getRoleById(id)
  }
}
