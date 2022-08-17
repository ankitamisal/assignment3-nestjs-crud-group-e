import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';
@Controller('Employeee')
export class EmployeeController {
  constructor(private readonly EmployeeService: EmployeeService) {}
  @Post()
  create(@Body() CreateEmployeeDto: CreateEmployeeDto) {
    return this.EmployeeService.create(CreateEmployeeDto);
  }

  @Get('/allData')
  findAll() {
    return this.EmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.EmployeeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() UpdateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.EmployeeService.update(+id, UpdateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EmployeeService.remove(+id);
  }
}
