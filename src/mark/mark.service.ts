import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mark } from "../entities/mark.entite";
import { Repository } from "typeorm";
import { MarkDto } from "../dtos/mark.dto";
import { LessonService } from "../lesson/lesson.service";
import { UserService } from "../user/user.service";
import { MarkEnum } from "../enums/mark.enum";

@Injectable()
export class MarkService {
  
  
  constructor(@InjectRepository(Mark) private markRepo: Repository<Mark>, private lessonService: LessonService, private userService: UserService) {
  }

  async setMark(markDto: MarkDto){
    const user = await this.userService.getOne((markDto.userId))
    const lesson = await this.lessonService.getOne(((new Date(markDto.lessonDate))))
    return await this.markRepo.save({ ...markDto, user, lesson })
  }
  async getOne(id: number){
    return await this.markRepo.findOneBy({id})
  }

  // async replaceMark(id: number, markDto: MarkDto){
  //   const user = await this.userService.getOne((markDto.userId))
  //   const lesson = await this.lessonService.getOne(((new Date(markDto.lessonDate))))
  //   return await this.markRepo.save({id, ...markDto, user, lesson},  )
  // }
}

