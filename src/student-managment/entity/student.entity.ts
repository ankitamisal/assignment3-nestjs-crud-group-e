import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class student_m {
  //@PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  //@Field({ nullable: true })
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Gender: string;

  @Column()
  Student_Email: string;

  @Column()
  Student_Add: string;

  @Column()
  Image: string
  
}
