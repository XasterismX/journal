import { BadGatewayException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entitie";
import { Repository } from "typeorm";
import { Role } from "../entities/role.entitie";
import { RoleEnum } from "../enums/role.enum";
import { RoleService } from "../role/role.service";


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>,
              @InjectRepository(Role) private roleRepo: Repository<Role>,
              private roleService: RoleService
  ) {
  }

  async create(userDto: UserDto) {
    const defaultRole: Role = await this.roleRepo.findOneBy({role:RoleEnum.STUDENT})
    return await this.userRepository.save({ ...userDto, roles: [defaultRole] });
  }

  async getAll() {
    return await this.userRepository.find({relations: {roles: true}});
  }

  async getOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(userDto: UserDto, id: number, roleId: number[]) {
    try {
      const rols: Role[] = []

      for (let i = 0; i <roleId.length;i++) {
        console.log(await this.roleService.getRoleById(roleId[i]))
        rols.push(await this.roleService.getRoleById(roleId[i]))
      }
      return  await this.userRepository.save({ ...userDto, roles: rols })

    }
    catch (e) {
      console.log(e)
      throw new BadGatewayException({message:"Не предвиденная ошибка"})
    }
    }
    async getUserWithEmail(email: string){
    return await this.userRepository.findOne({where: { email }, relations: {}}, )
    }

  async deleteUser(id: number) {
    return await this.userRepository.delete({ id });
  }

}
