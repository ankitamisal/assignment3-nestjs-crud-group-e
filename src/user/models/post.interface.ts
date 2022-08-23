import { IsString } from "class-validator";

export class UserPost{
  
    id:number;

    @IsString()
    name: string;

    @IsString()
    State: string;

   
    Image:string;

    createdAt:Date;
}