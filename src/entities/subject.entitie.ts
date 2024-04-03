import {
  Column,
  Entity,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Lesson } from "./lesson.entite";

@Entity()
export class Subject{
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: "text", nullable: false})
  name: string
  @OneToMany(() => Lesson, (lesson)=>lesson.date)
  lesson: Lesson[]


}