import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleController } from 'src/user-role/user-role.controller';
import { UserRoleService } from 'src/user-role/user-role.service';
import { userRoleRespoitory } from 'src/user-role/userrole.repository';
import { UserRoleA } from '../../user-role/entity/userRole.entity';
import { UserPostEntity } from './entity/users.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
   imports:[TypeOrmModule.forFeature([UserPostEntity,UserRoleA,userRoleRespoitory])],
  controllers: [UserController,UserRoleController],
  providers: [UserService,UserRoleService]
})
export class UserModule {}
