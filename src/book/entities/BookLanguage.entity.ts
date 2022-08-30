import { Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('BookLanguage')
export class BookLanguage {
    @PrimaryGeneratedColumn()
    BookLanguage_Id: number;

}