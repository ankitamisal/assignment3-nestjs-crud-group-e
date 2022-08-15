import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { create } from 'domain';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentManagmentService } from './student-managment.service';

@Controller('student-managment')
export class StudentManagmentController {
  constructor(
    private readonly StudentManagmentService: StudentManagmentService,
  ) {}

  @Post()
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.StudentManagmentService.create(CreateStudentDto);
    }
    
}
