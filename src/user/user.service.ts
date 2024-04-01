import { Injectable } from '@nestjs/common';
import { UserDto } from "../dtos/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entitie";
import { Repository } from "typeorm";
import { MarkEnum } from "../enums/mark.enum";
import { Mark } from "../entities/mark.entite";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async create(userDto: UserDto){
    return await this.userRepository.save(userDto)
  }
  async getAll(){
    return await this.userRepository.find({})
  }
  async getOne(id: number){
    return await this.userRepository.findOneBy({id})
  }
  async deleteUser(id: number){
    return await this.userRepository.delete({id})
  }

}
