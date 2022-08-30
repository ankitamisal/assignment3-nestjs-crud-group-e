import { IsString } from "class-validator";

export class UserPost{
  
    id:number;

    @IsString()
    name: string;

    @IsString()
    State: string;

    @IsString()
    Image:string;

    @IsString()
    Email:String;

    // createdAt:Date;
}