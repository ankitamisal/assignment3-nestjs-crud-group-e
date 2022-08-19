// import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class employee_t {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  //@Field({ nullable: true })
  // @IsNotEmpty()
  Emp_FirstName: string;
  @Column()
  Emp_LastName: string;
  @Column()
  Emp_Gender: string;
  @Column()
  Emp_Email: string;
  @Column()
  Emp_Add: string;
  @Column()
  Emp_profile:string;
}
