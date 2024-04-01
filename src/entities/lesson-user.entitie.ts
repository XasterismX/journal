import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";
import { Lesson } from "./lesson.entite";


@Entity()
export class LessonUser{
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: "boolean", nullable: false})
  status: boolean

  @ManyToMany(()=> Lesson)
  @JoinTable()
  lesson: Lesson
}