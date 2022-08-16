import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductManagementModule } from './product-management/product-management.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    UserModule,
    StudentManagmentModule,
    ProductManagementModule,
    BookModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
