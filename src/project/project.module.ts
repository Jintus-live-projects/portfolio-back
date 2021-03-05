import { Module } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectController } from './controllers/project.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
