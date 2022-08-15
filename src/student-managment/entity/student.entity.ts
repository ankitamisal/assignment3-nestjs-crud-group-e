import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class student_m {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Gender: string;

  @Column()
  Student_Email: string;

  @Column()
  Student_Add: string;
}
