import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class employee_t {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  //@Field({ nullable: true })
  @IsNotEmpty()
  FirstName: string;
  @Column()
  LastName: string;
  @Column()
  Gender: string;
  @Column()
  Email: string;
  
  @Column()
  Add: string;
}
