// import { from } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsInt} from 'class-validator';

@Entity('User-Post')
export class UserPostEntity {
  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  State: string;

  @Column()
  @IsNotEmpty()
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
