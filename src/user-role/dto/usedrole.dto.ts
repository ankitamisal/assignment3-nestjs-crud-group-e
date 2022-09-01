import { IsString } from "class-validator";

export class RoleDto{

        id:number;

        @IsString()
        Roles:String;

}