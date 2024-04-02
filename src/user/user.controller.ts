import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {
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
  async updateUser(@Body() userDto: UserDto, @Param("id") id: number){

    return this.userService.updateUser(userDto, id)
  }

  @Delete("/delete/:id")
  async deleteUser(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }

}
