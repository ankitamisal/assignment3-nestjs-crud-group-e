import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from './user/models/post.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
   imports:[TypeOrmModule.forFeature([UserPostEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
