import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { create_stud_sub_Dto } from './dto/stude_sub.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { student_m } from './entity/student.entity';
import { Student_subject } from './entity/Student_subject.entity';

@Injectable()
export class StudentManagmentService {
  //inject student repository...
  constructor(
    @InjectRepository(student_m)
    private readonly studentRepository: Repository<student_m>,

    @InjectRepository(Student_subject)
    private readonly student_subRepository: Repository<Student_subject>,
  ) {}

  create(CreateStudentDto: CreateStudentDto): Promise<student_m> {
    // let stud: student_m = new student_m();
    // //student.id = CreateStudentDto.id
    // stud.FirstName = CreateStudentDto.FirstName;
    // stud.LastName = CreateStudentDto.LastName;
    // stud.Gender = CreateStudentDto.Gender;
    // stud.Student_Email = CreateStudentDto.Student_Email;
    // stud.Student_Add = CreateStudentDto.Student_Add;
    // return this.studentRepository.save(stud);
    return this.studentRepository.save(CreateStudentDto);
  }

  findAll(): Promise<student_m[]> {
    return this.studentRepository.find();
  }
  create_stud_sub(
    create_stud_sub_Dto: create_stud_sub_Dto,
  ): Promise<Student_subject> {
    // let stud: student_m = new student_m();
    // //student.id = CreateStudentDto.id
    // stud.FirstName = CreateStudentDto.FirstName;
    // stud.LastName = CreateStudentDto.LastName;
    // stud.Gender = CreateStudentDto.Gender;
    // stud.Student_Email = CreateStudentDto.Student_Email;
    // stud.Student_Add = CreateStudentDto.Student_Add;
    // return this.studentRepository.save(stud);
    return this.student_subRepository.save(create_stud_sub_Dto);
  }

  findAll_stud_sub(): Promise<Student_subject[]> {
    return this.student_subRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOneBy({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    // let stud: student_m = new student_m();
    // stud.FirstName = updateStudentDto.FirstName;
    // stud.LastName = updateStudentDto.LastName;
    // stud.Gender = updateStudentDto.Gender;
    // stud.Student_Email = updateStudentDto.Student_Email;
    // stud.Student_Add = updateStudentDto.Student_Add;
    // stud.id = id;
    // return this.studentRepository.save(stud);
    return this.studentRepository.update(id, updateStudentDto);
  }
  updateAll(id: number, updateStudentDto: UpdateStudentDto) {
    return this.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
