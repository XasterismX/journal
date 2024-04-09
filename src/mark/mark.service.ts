import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mark } from "../entities/mark.entite";
import { Repository } from "typeorm";
import { MarkDto } from "../dtos/mark.dto";
import { LessonService } from "../lesson/lesson.service";
import { UserService } from "../user/user.service";
import { MarkEnum } from "../enums/mark.enum";
import { User } from "../entities/user.entitie";
import { Subject } from "../entities/subject.entitie";

@Injectable()
export class MarkService {


  constructor(@InjectRepository(Mark) private markRepo: Repository<Mark>, private lessonService: LessonService, private userService: UserService) {
  }

  async setMark(markDto: MarkDto) {
    const user = await this.userService.getOne((markDto.user));
    const lesson = await this.lessonService.getOne(new Date(markDto.lessonDate));
    return await this.markRepo.save({ ...markDto, user, lesson });
  }

  async getOne(id: number) {
    return await this.markRepo.findOneBy({ id });
  }

  async getAll(data) {
    const user = await this.userService.getOne(data.userId)
    if (!data.lessonDate) {
      const lesson = await this.lessonService.getOne(data.lessonDate);
      return this.markRepo.findBy({user, lesson });
    }
    return this.markRepo.findBy({ user });
  }

  async replaceMark(id: number, markDto: MarkDto) {
    try {
      const user = await this.userService.getOne((markDto.user));
      const lesson = await this.lessonService.getOne(markDto.lessonDate);
      console.log(markDto.lessonDate);
      console.log(lesson);
      return await this.markRepo.save({ id: Number.parseInt(String(id)), ...markDto, user, lesson: lesson });
    } catch (e) {
      throw new HttpException(e, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}

