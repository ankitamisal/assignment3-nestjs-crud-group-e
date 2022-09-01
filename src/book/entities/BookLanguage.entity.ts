import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./book.entity";
import { LanguagetEntity } from "./Language.entity";
@Entity('BookLanguage')
export class BookLanguage {
    @PrimaryGeneratedColumn()
    BookLanguage_Id: number;

    @Column()
    language_id:number
    // @ManyToMany(()=>LanguagetEntity,(language_id)=>language_id.Language_id)
    // language_id:LanguagetEntity

    @Column()
    book_id:number
//     @ManyToMany(()=>BookEntity,book_id=>book_id.book_id)
// book_id:BookEntity[];


}