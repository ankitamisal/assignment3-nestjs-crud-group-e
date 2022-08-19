// import { from } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsInt} from 'class-validator';
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
