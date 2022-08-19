import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsDefined()
  Emp_FirstName: string;
  @IsString()
  @IsDefined()
  Emp_LastName: string;
  @IsString()
  @IsDefined()
  Emp_Gender: string;
  @IsEmail()
  @IsNotEmpty()
  Emp_Email: string;
  @IsString()
  @IsDefined()
  Emp_Add: string;
  Emp_profile: string;
}
