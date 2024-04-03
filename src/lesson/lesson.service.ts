import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "../entities/lesson.entite";
import { Repository } from "typeorm";
import { LessonDto } from "../dtos/lessonDto";
import { SubjectService } from "../subject/subject.service";

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
              private subjectService: SubjectService
  ) {
  }

  async createLesson(lessonDto: LessonDto) {
    console.log(lessonDto)
    const lesson = await this.lessonRepo.save({ ...lessonDto, subject: await this.subjectService.getOne(lessonDto.subject)});
    console.log(lesson)
    return lesson
  }

  async getALl(){
    return await this.lessonRepo.find()
  }
  async getOne(date: Date){
    return await this.lessonRepo.findOneBy({date})
  }
}
