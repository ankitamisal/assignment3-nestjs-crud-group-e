import { IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
  id: number;
  @IsString() @IsOptional()
  FirstName?: string;
  
  LastName?: string;

  Gender?: string;

  Student_Email?: string;

  Student_Add?: string;
  
  Image?: string;
}
