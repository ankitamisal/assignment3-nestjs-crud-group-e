
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString } from 'class-validator';
@Entity('book_detail')
export class BookEntity {
    @PrimaryGeneratedColumn()
    @IsString()
    book_id: number;
    @Column({default: ''})
    @IsString()
    book_name: string;
    @IsString()
    @Column()
    author: string;
    @Column()
    price: number;
    @Column()
    book_image: string;
    @Column()
    book_number: string;
}