import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Subject } from "../entities/subject.entitie";
import { Repository } from "typeorm";
import { SubjectDto } from "../dtos/subject.dto";

@Injectable()
export class SubjectService {

  constructor(@InjectRepository(Subject) private subjectRepo: Repository<Subject>) {
  }

  async create(subjectDto: SubjectDto): Promise<Subject> {
    return await this.subjectRepo.save(subjectDto);
  }

  async getAll() {
    return await this.subjectRepo.find();
  }

  async getOne(id: number) {
    return await this.subjectRepo.findOneBy({ id }, );
  }

  async delete(id: number) {
    return await this.subjectRepo.delete({ id });
  }
}
