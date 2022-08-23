import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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