import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MarkEnum } from "../enums/mark.enum";
import { Lesson } from "./lesson.entite";


@Entity()

export class Mark {
  @PrimaryGeneratedColumn()
  id: number
  @Column({type:"enum", enum: MarkEnum, nullable: true})
  mark: MarkEnum

}