import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entitie";
import { Role } from "./entities/role.entitie";
import { Mark } from "./entities/mark.entite";
import { Lesson } from "./entities/lesson.entite";
import { Subject } from "./entities/subject.entitie";
import { UserModule } from "./user/user.module";
import { LessonUser } from "./entities/lesson-user.entitie";
import { RoleModule } from "./role/role.module";
import { MarkModule } from "./mark/mark.module";
import { SubjectService } from "./subject/subject.service";
import { SubjectController } from "./subject/subject.controller";
import { SubjectModule } from "./subject/subject.module";
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "journal",
    entities: [User, Role, Mark, Lesson, Subject, LessonUser],
    synchronize: true
  }), UserModule, RoleModule, MarkModule, SubjectModule, LessonModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
