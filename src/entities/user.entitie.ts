import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entitie";
import { Mark } from "./mark.entite";

@Entity({name: "user"})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "text", unique: true, nullable: false })
  email: string;
  @Column({ type: "text", nullable: true })
  group: string;
  @OneToMany(() => Mark, (mark) => mark.id)

  marks: Mark[];
  @ManyToMany(() => Role, (roles) => roles.id, { eager: true })
  @JoinTable()
  roles: Role[];

}