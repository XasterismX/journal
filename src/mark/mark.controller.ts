import { Body, Controller, Get, Param, Post, Put, Query, Req, Request, UseGuards } from "@nestjs/common";
import { MarkService } from "./mark.service";
import { MarkDto } from "../dtos/mark.dto";
import { LessonService } from "../lesson/lesson.service";
import { UserService } from "../user/user.service";
import { AuthGuard } from "../auth/auth.guard";

@UseGuards()
@Controller('mark')
export class MarkController {
constructor(private markService: MarkService) {
}
  @Post("/set")
  async setMark(@Body() markDto: MarkDto) {
    return await this.markService.setMark(markDto)
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async getOne(@Request() req){
  return this.markService.getOne(req.user.id)
  }
  @Get("")
  async getAll(@Request() req){
  return this.markService.getAll(req.user)
  }

  @Put("/update")
  async updateMark(@Body() markDto: MarkDto, @Query("id") id: number) {
    return await this.markService.replaceMark(id, markDto)
  }

}
