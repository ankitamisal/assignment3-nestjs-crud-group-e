import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")


export class categories{
    @PrimaryGeneratedColumn('uuid')
    id: number
    

}