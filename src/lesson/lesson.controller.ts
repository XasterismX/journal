import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { LessonService } from "./lesson.service";
import { LessonDto } from "../dtos/lessonDto";
import { LessonEnum } from "../enums/lesson.enum";

@Controller('lesson')
export class LessonController {

  constructor(private lessonService: LessonService) {
  }

  @Post("/create")
  async createLesson(@Body() lessonDto:LessonDto){
    lessonDto.type = "lecture" ? LessonEnum.LECTURE : LessonEnum.PRACTICAL
    if (lessonDto.date == undefined){
      let currentTime = new Date().getTime()
      lessonDto.date = new Date(currentTime)
      return this.lessonService.createLesson(lessonDto)
    }
    return this.lessonService.createLesson(lessonDto)
  }

  @Get("/all")
  async getAll(){
    return await this.lessonService.getALl()
  }
  @Get("/one")
  async getOne(@Query("date") date: string){

    return await this.lessonService.getOne(new Date(date))
  }
}
