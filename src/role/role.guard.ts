import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { RoleEnum } from "../enums/role.enum";
import { RoleService } from "./role.service";
import { Role } from "../entities/role.entitie";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwt: JwtService, private roleService: RoleService) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const header = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(header);

    try {
      const { roles } = this.jwt.decode(token);


      if (!this.findTeacherRoleInArray(roles)) {
        throw new UnauthorizedException({ message: "Доступ запрещен" });
      }
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException({ message: "Доступ запрещен" });
    }
    return true;
  }

  private findTeacherRoleInArray(rolesArr: Role[]) {
    for (let role of rolesArr) {
      if(role.role === RoleEnum.TEACHER){
        return true
      }
    }

    return false;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
