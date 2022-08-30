import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employee_t } from './entity/employee.entity';
//import { TypeORMError } from 'typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MulterModule } from '@nestjs/platform-express';
// import { Contact } from './entity/Contact.entity';
// import { Task } from './entity/Task.entity';
// import { Meeting } from './entity/metting.entity';
import { Department } from './entity/department.entity';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([employee_t, Department]),
    
    // MulterModule.register({
    //   dest: './images',
    // }),
  ],
  controllers: [EmployeeController,DepartmentController],
  providers: [EmployeeService,DepartmentService]
})
export class EmployeeModule {}
