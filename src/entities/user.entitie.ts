import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entitie";
import { LessonUser } from "./lesson-user.entitie";
import { Mark } from "./mark.entite";

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number

  @Column({type:"text", nullable: false})
  password: string

  @Column({type:"text", unique: true, nullable: false})
  email: string

  @ManyToMany(()=> Mark, {eager: true})
  @JoinTable()
  marks: Mark[]
  @ManyToMany(() => Role, {eager: true})
  @JoinTable()
  roles: Role[]

  @ManyToMany(()=> LessonUser, {eager: true})
  @JoinTable()
  lesson_user: LessonUser

}