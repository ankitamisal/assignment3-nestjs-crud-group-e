import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { employee_t } from './entity/employee.entity';
@Injectable()
export class EmployeeService {
  //inject employee repository...
  constructor(
    @InjectRepository(employee_t)
    private readonly employeeRepository: Repository<employee_t>,
  ) {}
  create(CreateEmployeeDto: CreateEmployeeDto): Promise<employee_t> {
    return this.employeeRepository.save(CreateEmployeeDto);
  }
  findAll(): Promise<employee_t[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }
  updateAll(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }
  remove(id: string) {
    return this.employeeRepository.delete(+id);
  }
}
