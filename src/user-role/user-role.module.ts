import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRoleRespoitory } from 'src/user-role/userrole.repository';

import { UserPostEntity } from 'src/user/models/entity/users.entity';
import { UserRoleA } from './entity/userRole.entity';

@Module({
  imports:[TypeOrmModule.forFeature([userRoleRespoitory,UserPostEntity,UserRoleA])],
  providers: [UserRoleService],
  controllers: [UserRoleController]
})
export class UserRoleModule {}
