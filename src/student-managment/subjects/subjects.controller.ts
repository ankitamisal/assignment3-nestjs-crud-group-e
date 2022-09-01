import { Body, Controller, Post, Req, Request, Get } from '@nestjs/common';
import { request } from 'express';
import { Observable } from 'rxjs';
import { student_m } from '../entity/student.entity';
import { Student_subject } from '../entity/Student_subject.entity';
import { subjects } from '../entity/subject.entity';
import { StujectsService } from './stujects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: StujectsService) {}

  @Post()
  async create(
    @Body() subjects: subjects[],
    @Request() req,
  ): Promise<subjects[]> {
    const stud = req.student_m;
    return this.subjectsService.create(stud, subjects);
  }

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }
}
