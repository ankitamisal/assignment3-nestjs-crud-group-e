import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  FirstName: string;
  @IsString()
  LastName: string;
  @IsString()
  Gender: string;
  @IsEmail()
  @IsNotEmpty()
  Student_Email: string;
  @IsString()
  Student_Add: string;
  Image: string;
}
