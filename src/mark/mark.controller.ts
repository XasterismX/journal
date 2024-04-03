import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";

@UseGuards()
@Controller('mark')
export class MarkController {

  @Post("/set")
  async setMark(@Body() userDto: UserDto){

  }

}
