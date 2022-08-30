import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeService } from '../employee.service';
import { Department } from '../entity/department.entity';
import { employee_t } from '../entity/employee.entity';

@Injectable()
export class DepartmentService {
    constructor(@InjectRepository(Department)
    private readonly departmentRepo:Repository<Department>,
    private departmentService:EmployeeService,
    ){}
    create(employee :employee_t, department:Department[]):Promise<Department[]>{
        return this.departmentRepo.save(department);
    }
    findAll():Promise<Department[]>
    {
        return this.departmentRepo.find();
    }
}
