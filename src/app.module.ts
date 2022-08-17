import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user.module';
import { EmployeeModule } from './Employeee/employee.module';

import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductManagementModule } from './product-management/product-management.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookModule } from './book/book.module';
@Module({
  imports: [
    UserModule,
    StudentManagmentModule,
    ProductManagementModule,
    BookModule,
    EmployeeModule,

    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + 'dist/**/*.entity{.js,.ts}'],
        synchronize: configService.get<boolean>('DB_SYNC'),
        //synchronize: true,
        // logging:true
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
