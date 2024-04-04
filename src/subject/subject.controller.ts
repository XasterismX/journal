import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectDto } from "../dtos/subject.dto";

@Controller("subject")
export class SubjectController {

  constructor(private subjectService: SubjectService) {
  }

  @Post("/create")
  async createSubject(@Body() subjectDto: SubjectDto) {
    return await this.subjectService.create(subjectDto);
  }

  @Get("/all")
  async getAll() {
    return await this.subjectService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id") id: number) {
    return await this.subjectService.getOne(id);
  }

  @Delete("")
  async delete(@Param("id") id: number) {
    return await this.subjectService.delete(id)
  }

}
