import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './entities/student.entity';
import { StudentManagmentController } from './student-managment.controller';
import { StudentManagmentService } from './student-managment.service';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  controllers: [StudentManagmentController],
  providers: [StudentManagmentService],
})
export class StudentManagmentModule {}
