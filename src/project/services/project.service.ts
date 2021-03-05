import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private photoRepository: Repository<Project>,
  ) {}

  findAll(): Observable<Project[]> {
    return from(this.photoRepository.find());
  }
}
