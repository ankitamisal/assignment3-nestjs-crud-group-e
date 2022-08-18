import { IsInt, IsString } from "class-validator";

export class UserPost{
    @IsInt()
    id:number;

    @IsString()
    name: string;

    @IsString()
    State: string;

    @IsString()
    body:string;

    createdAt:Date;
}