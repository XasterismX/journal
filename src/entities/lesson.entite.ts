import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { LessonEnum } from "../enums/lesson.enum";
import { Subject } from "./subject.entitie";


@Entity()
export class Lesson {
  @PrimaryColumn({type: "timestamp"})
  date : number
  @Column({type: "enum", enum: LessonEnum, nullable:false})
  type: LessonEnum

}