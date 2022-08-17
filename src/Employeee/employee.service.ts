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
    let empl: employee_t = new employee_t();

    empl.FirstName = CreateEmployeeDto.FirstName;
    empl.LastName = CreateEmployeeDto.LastName;
    empl.Gender = CreateEmployeeDto.Gender;
    empl.Email = CreateEmployeeDto.Email;
    empl.Add = CreateEmployeeDto.Add;
    return this.employeeRepository.save(empl);
  }
  findAll(): Promise<employee_t[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let empl: employee_t = new employee_t();
    empl.FirstName = updateEmployeeDto.FirstName;
    empl.LastName = updateEmployeeDto.LastName;
    empl.Gender = updateEmployeeDto.Gender;
    empl.Email = updateEmployeeDto.Email;
    empl.Add = updateEmployeeDto.Add;
    empl.id = id;
    return this.employeeRepository.save(empl);
  }
  remove(id: number) {
    return this.employeeRepository.delete(id);
  }
}
