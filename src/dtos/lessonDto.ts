import { LessonEnum } from "../enums/lesson.enum";
import { Subject } from "../entities/subject.entitie";

export class LessonDto {
  date: Date
  type: LessonEnum
  subject: number
}