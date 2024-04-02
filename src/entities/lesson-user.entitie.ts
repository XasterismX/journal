import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entitie";
import { Lesson } from "./lesson.entite";


@Entity()
export class LessonUser{
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: "boolean", nullable: false})
  status: boolean
  @OneToMany(()=> Lesson, (lesson) => lesson.date)
  @JoinColumn()
  lesson: Lesson

  @ManyToOne(() => User, (user) => user.id)
  user: User

}