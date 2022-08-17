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
    let stud: student_m = new student_m();
    //student.id = CreateStudentDto.id
    stud.FirstName = CreateStudentDto.FirstName;
    stud.LastName = CreateStudentDto.LastName;
    stud.Gender = CreateStudentDto.Gender;
    stud.Student_Email = CreateStudentDto.Student_Email;
    stud.Student_Add = CreateStudentDto.Student_Add;
    return this.studentRepository.save(stud);
  }

  findAll(): Promise<student_m[]> {
    return this.studentRepository.find();
  }

  findOne(id:number) {
    return this.studentRepository.findOneBy({id});
  }

   update(id: number, updateStudentDto: UpdateStudentDto) {
    let stud: student_m = new student_m();
    stud.FirstName = updateStudentDto.FirstName;
    stud.LastName = updateStudentDto.LastName;
    stud.Gender = updateStudentDto.Gender;
    stud.Student_Email = updateStudentDto.Student_Email;
    stud.Student_Add = updateStudentDto.Student_Add;
    stud.id = id;
    return this.studentRepository.save(stud);
  }
  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
