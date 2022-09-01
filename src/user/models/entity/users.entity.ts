// import { from } from 'rxjs';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsString,IsInt, IsNotEmpty} from 'class-validator';
// import { nationalityEntity } from './user.entity';
// import { find } from 'rxjs';
// import { type } from 'os';
// import { nationality } from '../dto/user.dto';
import { UserRoleA } from '../../../user-role/entity/userRole.entity';
import { identity } from 'rxjs';

@Entity('User-Post')
export class UserPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({nullable:false})
  @IsNotEmpty()
  @IsString()
  Email:String;

  @Column({nullable:false})
  @IsNotEmpty()
  @IsString()
  State: string;
  @Column()
  Role:string;

  @Column()
  Image: string;
  
  // @Column()
  // createdAt: Date;

 
   @ManyToMany(()=>UserRoleA,userid=>userid.id,{cascade:true, eager:true})
   @JoinTable()
   userRol:UserRoleA[];
}
