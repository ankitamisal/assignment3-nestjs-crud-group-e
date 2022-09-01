import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Subject } from 'rxjs';
import { Repository } from 'typeorm';
import { student_m } from '../entity/student.entity';
import { Student_subject } from '../entity/Student_subject.entity';
import { subjects } from '../entity/subject.entity';
import { StudentManagmentService } from '../student-managment.service';

@Injectable()
export class StujectsService {
  constructor(
    @InjectRepository(subjects)
    private readonly subjectrepository: Repository<subjects>,
    private studentServices: StudentManagmentService,
  ) {}

  async create(
    student: student_m,
    subject: subjects[],
    // Student_subject: Student_subject[],
  ): Promise<subjects[]> {
    // subjects.id = student_m;
    // subjects.name = student_m;
    // subjects.info = student_m
    return this.subjectrepository.save(subject);
  }
    
  findAll(): Promise<subjects[]> {
    return this.subjectrepository.find();
  }
}
