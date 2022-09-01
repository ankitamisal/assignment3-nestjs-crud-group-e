import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { student_m } from './student.entity';

@Entity('Student_subject')
export class Student_subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentMId: number;

  @Column()
  subjectsId: number;
}
