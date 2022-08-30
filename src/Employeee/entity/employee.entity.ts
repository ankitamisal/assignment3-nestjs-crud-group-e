
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Department } from './department.entity';


@Entity()
export class employee_t {
  @PrimaryGeneratedColumn()
    id: number;
  @Column()

  Emp_FirstName: string;
  @Column()

  Emp_LastName: string;
   @Column()
  Emp_Gender: string;
  @Column({ unique: true })
  Emp_Email: string;
  @Column()
  Emp_Add: string;
  @Column()
  Emp_MobNumber:string;
// @OneToOne(()=>Contact,contactInfo=>contactInfo.employee,{onDelete:'CASCADE'})
// contactInfo:Contact;
// @OneToMany(()=>Task,task=>task.employee)
//     tasks:Task[];

// @ManyToOne(()=>employee_t,employee=>employee.directReports,{onDelete:'SET NULL'})
// manager:employee_t;
// @OneToMany(()=>employee_t,(employee)=>employee.manager)
// directReports:employee_t[];

@ManyToMany(()=>Department,department=>department.Employee)

department:Promise<Department[]>;


}

