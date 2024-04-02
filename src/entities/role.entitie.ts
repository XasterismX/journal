import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../enums/role.enum";
import { User } from "./user.entitie";


@Entity()

export class Role{
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: "enum", enum: RoleEnum, default: RoleEnum.STUDENT})
  role: RoleEnum



}