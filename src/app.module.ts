import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';

import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductManagementModule } from './product-management/product-management.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule}from '@nestjs/config';

@Module({

  imports: [UserModule, StudentManagmentModule, ProductManagementModule, BookModule,
  ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.POSTGRES_HOST,
      port:parseInt(<string>process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true})],

  controllers: [AppController],


  providers: [AppService],
})
export class AppModule {}
