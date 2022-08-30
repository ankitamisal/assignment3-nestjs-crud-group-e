import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/models/user.module';
import { EmployeeModule } from './Employeee/employee.module';
import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductModule } from './product-management/product-management.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { MulterModule } from '@nestjs/platform-express';
import { UserRoleModule } from './user-role/user-role.module';

// sgdvggvsa
@Module({
  imports: [
    UserModule,
    StudentManagmentModule,
    ProductModule,
    BookModule,
    EmployeeModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MulterModule.register({
      dest: './images',
    }),
    UserRoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
