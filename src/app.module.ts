import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/models/user.module';
import { EmployeeModule } from './Employeee/employee.module';
// import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductModule } from './product-management/product-management.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { MulterModule } from '@nestjs/platform-express';
import { student_m } from './student-managment/entity/student.entity';
import { subjects } from './student-managment/entity/subject.entity';
import { SubjectsController } from './student-managment/subjects/subjects.controller';
import { StujectsService } from './student-managment/subjects/stujects.service';
import { StudentManagmentModule } from './student-managment/student-managment.module';
import { Student_subject } from './student-managment/entity/Student_subject.entity';

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
      //
      entities: [student_m, subjects, Student_subject],
      synchronize: false,
    }),
    MulterModule.register({
      dest: './images',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
