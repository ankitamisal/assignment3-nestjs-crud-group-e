import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  FirstName: string;

  @IsString()
  @IsNotEmpty()
  LastName: string;

  @IsString()
  @IsNotEmpty()
  Gender: string;

  @IsEmail()
  @IsNotEmpty()
  Student_Email: string;

  @IsString()
  @IsNotEmpty()
  Student_Add: string;

  Image: string;
  
  static Image: string;
}
