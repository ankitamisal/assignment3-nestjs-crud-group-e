import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Student_name: string
    
    @Column()
    Student_Email:string

    @Column()
    Student_Add: string

    @Column()
    Student_Gender:string    
    
 }
