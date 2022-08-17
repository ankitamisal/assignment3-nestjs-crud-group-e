import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';

@Entity('User-Post')
export class UserPostEntity{
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    State:string;
    

    @Column()
    body:string;

    @Column({type: 'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;
}