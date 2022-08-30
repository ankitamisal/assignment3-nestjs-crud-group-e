import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  id: number;
  @IsString()
  FirstName: string;
  @IsString()
  LastName: string;
  @IsString()
  Gender: string;
  Student_Email: string;
  @IsString()
  Student_Add: string;
  Image: string;
  static Image: string;
}
