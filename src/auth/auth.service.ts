import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { UserDto } from "../dtos/user.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwt: JwtService) {
  }

  async login(userDto: UserDto){
    return this.validateUser(userDto)
  }
  async registration(userDto: UserDto){
  const candidate = await  this.userService.getUserWithEmail(userDto.email)
    if (candidate){
      throw new HttpException("Пользователь уже существует", HttpStatus.BAD_REQUEST)
    }
    userDto.password = await bcrypt.hash(userDto.password, 10)
    const user = await this.userService.create(userDto)
    return { access_token: await this.generateJwt(user) }
  }

  async logout(){

  }

  private async generateJwt(user){
    return await this.jwt.signAsync({ ...user, password: null })
  }

  private async validateUser(userDto: UserDto) {
    const candidate = await this.userService.getUserWithEmail(userDto.email)
    if (!candidate || !await bcrypt.compare(userDto.password, candidate.password)){
      throw new UnauthorizedException({message: "Неправильный email или пароль"})
    }
    return { access_token: await this.generateJwt({ ...candidate, password: null }) }
  }
}
