import {  IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { LanguagetEntity } from "./Language.entity";
@Entity('book_detail')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;
    @Column()
    book_name: string;
    @Column()
    author: string;
    @Column()
    price: number;
    @Column()
    book_number:number;


    @ManyToMany(()=>LanguagetEntity,(language_id)=>language_id.Language_id)
    @JoinTable({
        name:"BookLanguage",
        joinColumn:{
            name:"book_id",
            // foreignKeyConstraintName:"book_id"
        }, inverseJoinColumn:{
            name:'language_id',
            // foreignKeyConstraintName:"language_Id"
        }
    })
    language_id:LanguagetEntity[];
}