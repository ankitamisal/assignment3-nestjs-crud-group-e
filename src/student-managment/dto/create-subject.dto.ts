import { IsString } from "class-validator";

export class createSubjectDto{

    id: number;

    @IsString()
    name: String;
    
    @IsString()
    info: string;

}