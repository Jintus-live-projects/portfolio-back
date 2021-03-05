import { Controller, Get } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { Observable } from 'rxjs';
import { ProjectService } from '../services/project.service';

@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getAllProjects(): Observable<Project[]> {
    return this.projectService.findAll();
  }
}
