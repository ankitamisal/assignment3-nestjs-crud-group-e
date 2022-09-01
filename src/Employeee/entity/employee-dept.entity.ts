import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//mport { employee_t } from "./employee.entity";
@Entity()
export class Employee_dept {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    EmployeeId:number;
    @Column()
    departmentId:number;

}