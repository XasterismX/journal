import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entitie";
import { Repository } from "typeorm";
import { Role } from "../entities/role.entitie";
import { RoleEnum } from "../enums/role.enum";


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>,
              @InjectRepository(Role) private roleRepo: Repository<Role>
  ) {
  }

  async create(userDto: UserDto) {

    if(await this.userRepository.findOneBy({ email: userDto.email })){
      throw new HttpException("пользователь существует", HttpStatus.BAD_REQUEST)
    }
    const defaultRole: Role = await this.roleRepo.findOneBy({role:RoleEnum.STUDENT})
    return this.userRepository.save({ ...userDto, roles: [defaultRole] });
  }

  async getAll() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async updateUser(userDto: UserDto, id: number) {
    try {
      return this.userRepository.update(id, { ...userDto })
    }catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
    }

  async deleteUser(id: number) {
    return await this.userRepository.delete({ id });
  }

}
