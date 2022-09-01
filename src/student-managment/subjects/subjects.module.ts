import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// { student_m } from '../entity/student.entity';
//import { subjects } from '../entity/subject.entity';
import { StudentManagmentModule } from '../student-managment.module';
import { StujectsService } from './stujects.service';
import { subjectRespoitory } from './subject.repository';
import { SubjectsController } from './subjects.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([subjectRespoitory]),
    StudentManagmentModule,
  ],
  controllers: [SubjectsController],
  providers: [StujectsService],
})
export class SubjectsModule {}
