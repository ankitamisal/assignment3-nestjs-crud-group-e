import { IsDefined, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Matches } from 'class-validator';

export class CreateEmployeeDto {
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
  @IsNotEmpty()
  @IsPhoneNumber()
  Emp_MobNumber:string;
  // employeeId:number;  
  // @Number()
  // Emp_Number:number;
  //   Emp_profile: string;
}
