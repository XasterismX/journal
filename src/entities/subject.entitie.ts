import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson.entite";

@Entity()
export class Subject{
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: "text", nullable: false})
  name: string
  @ManyToMany(() => Lesson, {eager: true})
  @JoinTable()
  lesson_id: Lesson
}