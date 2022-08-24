import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  id: number;
  @IsString()
  Emp_FirstName: string;
  @IsString()
  Emp_LastName: string;
  @IsString()
  Emp_Gender: string;

  Emp_Email: string;

  @IsString()
  Emp_Add: string;
  //   Emp_profile: string;
}
