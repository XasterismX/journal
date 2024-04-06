import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MarkEnum } from "../enums/mark.enum";
import { Lesson } from "./lesson.entite";
import { User } from "./user.entitie";


@Entity()

export class Mark {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ type: "enum", enum: MarkEnum, nullable: true })
  mark: MarkEnum
  @ManyToOne(() => User,(user)=>user.id, {nullable: false})
  @JoinColumn()
  user: User
  @ManyToOne(() => Lesson, {nullable: false, eager: true})
  @JoinColumn()
  lesson: Lesson
}