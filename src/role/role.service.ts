import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "../entities/role.entitie";
import { Repository } from "typeorm";
import { RoleEnum } from "../enums/role.enum";

@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {
  }

  async getRoleById(id: number){
    return this.roleRepo.findOneBy({id})
  }
  async createRole(role: RoleEnum){
    return this.roleRepo.save({role})
  }
  async getAllRole(){
    return this.roleRepo.find()
  }

}
