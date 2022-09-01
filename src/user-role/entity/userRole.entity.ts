import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user-role')
export class UserRoleA{
@PrimaryGeneratedColumn()
id:number;

@Column()
Roles:String;

}