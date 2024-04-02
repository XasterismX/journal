import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { LessonEnum } from "../enums/lesson.enum";
import { Subject } from "./subject.entitie";
import { Mark } from "./mark.entite";


@Entity()
export class Lesson {
  @PrimaryColumn({type: "timestamp"})
  date : number
  @Column({type: "enum", enum: LessonEnum, nullable:false})
  type: LessonEnum
  @ManyToMany(()=> Mark, (mark) => mark.id)
  @JoinTable()
  mark: Mark[]
}