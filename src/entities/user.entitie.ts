import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entitie";
import { LessonUser } from "./lesson-user.entitie";
import { Mark } from "./mark.entite";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "text", unique: true, nullable: false })
  email: string;
  @Column({ type: "text", nullable: true})
  group: string;

  @ManyToMany(() => Mark, { eager: true })
  @JoinTable()
  marks: Mark[];
  @ManyToMany(() => Role,(roles)=> roles.id, { eager: true } )
  @JoinTable()
  roles: Role[];

  @OneToMany(() => LessonUser,(lesson_user)=>lesson_user.id, )
  @JoinColumn({name:"lesson"})
  lesson_user: LessonUser;

}