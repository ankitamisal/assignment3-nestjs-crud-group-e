import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { student_m } from './student.entity';

@Entity()
export class subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  info: String;

  @ManyToMany(() => student_m, (students) => students.subjects)
  
  students: Promise<student_m[]>;
}
