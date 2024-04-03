import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Mark } from "../entities/mark.entite";
import { Repository } from "typeorm";
import { MarkDto } from "../dtos/mark.dto";

@Injectable()
export class MarkService {
  
  
  constructor(@InjectRepository(Mark) private markRepo: Repository<Mark>) {
  }

  async setMark(markDto: MarkDto){
    return this.markRepo.save(markDto);
  }
  
}
