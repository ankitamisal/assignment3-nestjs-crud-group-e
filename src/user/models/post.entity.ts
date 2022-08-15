import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('User-Post')
export class UserPostEntity{
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default:''})
    body:string;

    @Column({type: 'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;
}