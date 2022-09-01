import { IsString } from "class-validator";
export class createDepartmentDto{
    id: number;
    @IsString()
    depart: String;
    @IsString()
    post: string;
}