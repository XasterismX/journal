import { MarkEnum } from "../enums/mark.enum";
import { User } from "../entities/user.entitie";
import { Lesson } from "../entities/lesson.entite";

export class MarkDto {
  mark: MarkEnum
  userId: User
  lessonId: Lesson

}