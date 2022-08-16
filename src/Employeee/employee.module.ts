import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employee_t } from './entity/employee.entity';
//import { TypeORMError } from 'typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([employee_t])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
