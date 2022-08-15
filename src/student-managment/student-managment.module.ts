import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student_m } from './entity/student.entity';

import { StudentManagmentController } from './student-managment.controller';
import { StudentManagmentService } from './student-managment.service';

@Module({
  imports: [TypeOrmModule.forFeature([student_m])],
  controllers: [StudentManagmentController],
  providers: [StudentManagmentService],
})
export class StudentManagmentModule {}
