import { Module } from '@nestjs/common';
import { StudentManagmentController } from './student-managment.controller';
import { StudentManagmentService } from './student-managment.service';

@Module({
  controllers: [StudentManagmentController],
  providers: [StudentManagmentService]
})
export class StudentManagmentModule {}
