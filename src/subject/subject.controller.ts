import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectDto } from "../dtos/subject.dto";

@Controller("subject")
export class SubjectController {

  constructor(private subjecrService: SubjectService) {
  }

  @Post("/create")
  async createSubject(@Body() subjectDto: SubjectDto) {
    return await this.subjecrService.create(subjectDto);
  }

  @Get("/all")
  async getAll() {
    return await this.subjecrService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id") id: number) {
    return await this.subjecrService.getOne(id);
  }

  @Delete("")
  async delete(@Param("id") id: number) {
    return await this.subjecrService.delete(id)
  }

}
