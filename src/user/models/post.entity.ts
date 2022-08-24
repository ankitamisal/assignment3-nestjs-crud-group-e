// import { from } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString,IsInt} from 'class-validator';
import { find } from 'rxjs';

@Entity('User-Post')
export class UserPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  State: string;

  @Column()
  Image: string;
  
  // @Column()
  // createdAt: Date;
}
