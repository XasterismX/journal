import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UserService } from "./user.service";
import { RoleService } from "../role/role.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService,
              private  roleService: RoleService
              ) {
  }

  @Post("/create")
  async createUser(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }

  @Get("/all")
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id") id: number) {
    return await this.userService.getOne(id);
  }

  @Put("/update/:id")
  async updateUser(@Body() userDto: UserDto, @Param("id") id: number, @Body("roleId") roleId: number[]){
    try {
      return this.userService.updateUser(userDto, id, roleId)
    }catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
    }

  @Delete("/delete/:id")
  async deleteUser(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }

}
