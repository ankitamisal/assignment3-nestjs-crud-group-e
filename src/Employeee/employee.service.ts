import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { emp_dept_Dto } from './dto/emp-dept.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee_dept } from './entity/employee-dept.entity';
import { employee_t } from './entity/employee.entity';
// import { Contact } from './entity/Contact.entity';
// import { employee_t } from './entity/employee.entity';
// import { Meeting } from './entity/metting.entity';
// import { Task } from './entity/Task.entity';
@Injectable()
export class EmployeeService {
  //inject employee repository...
  constructor(
    @InjectRepository(employee_t)
    private readonly employeeRepository: Repository<employee_t>,
    @InjectRepository(Employee_dept)
    private readonly  employe_subRepo:Repository<Employee_dept>,
    // @InjectRepository(Contact))
  ){}
   //seed()
  //{
  //   
  
  // const ceo=this.employeeRepository.create({Emp_FirstName:'ANkitq'});
  //  this.employeeRepository.save(ceo)

//   const  ceoContactInfo=this.contactInfoRepository.create({Emp_MobNumber:2222222});
//   ceoContactInfo.employee=ceo;
//   await this.contactInfoRepository.save(ceoContactInfo);

//   const manager=this.employeeRepository.create({Emp_FirstName:'louics',manager:ceo})
//   //  const manager=this.contactInfoRepository.create({
//   //   Emp_FirstName:'marry',
//   //   manager:'ceo',
//   //  });

//    const task1=this.tasksRepository.create({Emp_FirstName:'harry'});
//    await this.contactInfoRepository.save(task1);
//    const task2=this.tasksRepository.create({Emp_FirstName:'jackson'});
//    await this.contactInfoRepository.save(task2);
// manager.tasks=[task1,task2];


// const meeting1=this.meetingRepository.create({zoomUrl:'meeting.com'});
// meeting1.attendees=[ceo]
//  this.employeeRepository.save(meeting1)
//await this.employeeRepository.save(manager);
 // }
  // getContactId(id:number)
  // {
  //   this.contactInfoRepository.createQueryBuilder('contactInfo').
  //   leftJoinAndSelect('contactInfo.directReports','directReports')
  //   .leftJoinAndSelect('contactInfo.tasks','tasks')
  //   .where('contactInfo.id = :contactInfoId',{contactInfoId})
  // }

  create(CreateEmployeeDto: CreateEmployeeDto): Promise<employee_t> {
//     const ceo=this.employeeRepository.create({Emp_FirstName:'ANkitq'});
//     this.employeeRepository.save(ceo);
//     const meeting1=this.meetingRepository.create({zoomUrl:'meeting.com'});
// meeting1.attendees=[ceo]
//  this.employeeRepository.save(meeting1)
    return this.employeeRepository.save(CreateEmployeeDto);
  }
  emp_dept_Dto(
    emp_dept_Dto:emp_dept_Dto):Promise<Employee_dept> {
      return this.employe_subRepo.save(emp_dept_Dto);

    }
    findAll_emp_dept():Promise<Employee_dept[]>
    {
      return this.employe_subRepo.find();
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
    return this.update(id, updateEmployeeDto);
  }
  remove(id: string) {
    return this.employeeRepository.delete(+id);
  }
}

