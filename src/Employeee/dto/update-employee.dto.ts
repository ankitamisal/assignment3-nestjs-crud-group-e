import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  Emp_FirstName: string;
  @IsString()
  Emp_LastName: string;
  @IsString()
  Emp_Gender: string;
  @IsEmail()
  @IsNotEmpty()
  Emp_Email: string;
  @IsString()
  Emp_Add: string;

  //   Emp_profile: string;
}
