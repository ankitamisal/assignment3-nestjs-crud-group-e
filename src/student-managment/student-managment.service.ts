import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { student_m} from './entity/student.entity';

@Injectable()
export class StudentManagmentService {
  //inject student repository...
  constructor(
    @InjectRepository(student_m)
    private readonly studentRepository: Repository<student_m>,
  ) {}
  create(CreateStudentDto: CreateStudentDto): Promise<student_m> {
    let student: student_m = new student_m();
    //student.id = CreateStudentDto.id
    student.FirstName = CreateStudentDto.FirstName;
    student.LastName = CreateStudentDto.LastName;
    student.Gender = CreateStudentDto.Gender;
    student.Student_Email = CreateStudentDto.Student_Email;
    student.Student_Add = CreateStudentDto.Student_Add;
    return this.studentRepository.save(student);
  }

  findAll(): Promise<student_m[]> {
    return this.studentRepository.find();
  }

  findOne(id) {
    return this.studentRepository.findOne(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    let student: student_m = new student_m();
    student.FirstName = updateStudentDto.FirstName;
    student.LastName = updateStudentDto.LastName;
    student.Gender = updateStudentDto.Gender;
    student.Student_Email = updateStudentDto.Student_Email;
    student.Student_Add = updateStudentDto.Student_Add;
    student.id = id;
    return this.studentRepository.save(student);
  }
  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
