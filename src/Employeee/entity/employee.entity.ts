import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class employee_t {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  //@Field({ nullable: true })
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
