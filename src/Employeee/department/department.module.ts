import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { departmentRepo } from './department.repository';
import { EmployeeModule } from '../employee.module';

@Module({
  imports:[TypeOrmModule.forFeature([departmentRepo]),EmployeeModule],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}
