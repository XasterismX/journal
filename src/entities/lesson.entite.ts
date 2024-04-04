import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn
} from "typeorm";
import { LessonEnum } from "../enums/lesson.enum";
import { Subject } from "./subject.entitie";
import { Mark } from "./mark.entite";


@Entity()
export class Lesson {
  @PrimaryColumn({type: "timestamp"})
  date : Date
  @Column({type: "enum", enum: LessonEnum, nullable:false})
  type: LessonEnum
  @OneToMany(()=> Mark, (mark) => mark.id, )
  mark: Mark[]
  @ManyToOne(()=> Subject,  {eager: true})
  @JoinColumn()
  subject: Subject
}