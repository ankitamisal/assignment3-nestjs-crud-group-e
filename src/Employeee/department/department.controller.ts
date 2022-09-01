import { Body, Controller, Post, Request,Req } from '@nestjs/common';
import { Department } from '../entity/department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService:DepartmentService){}
    @Post()
    create(@Body() department:Department[],@Request() req):Promise<Department[]>{
    const dept = req.employee_t;
    return  this.departmentService.create(dept,department)
}
}
