import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { employee_t } from "./employee.entity";

@Entity()
export class Department{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    depart:string;
    @Column()
    post:string;


    @ManyToMany(()=>employee_t,Employee=>Employee.department)
    @JoinTable()
    Employee:Promise<employee_t>
}