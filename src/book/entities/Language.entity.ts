import {  IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, JoinColumn,ManyToMany,ManyToOne ,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./book.entity";
@Entity('Language')
export class LanguagetEntity {
    @PrimaryGeneratedColumn()
    Language_id: number;
   @Column()
   Language:string;

//    @ManyToOne(() => BookEntity, Book_id => Book_id.book_id)
//    BookEntityId: BookEntity;
   
@ManyToMany(()=>BookEntity,book_id=>book_id.book_id)
book_id:BookEntity[];

}