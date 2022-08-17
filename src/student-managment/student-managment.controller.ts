import { Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
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
  @Get()
  findAll() {
    return this.StudentManagmentService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id:number) {
    return this.StudentManagmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatStudentDto: UpdateStudentDto) {
    return this.StudentManagmentService.update(+id, updatStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudentManagmentService.remove(+id);
  }
}
