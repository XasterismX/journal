import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectDto } from "../dtos/subject.dto";
import { RoleGuard } from "../role/role.guard";

@Controller("subject")
export class SubjectController {

  constructor(private subjectService: SubjectService) {
  }


  @UseGuards(RoleGuard)
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
  @UseGuards(RoleGuard)

  @Delete("")
  async delete(@Param("id") id: number) {
    return await this.subjectService.delete(id)
  }

}
