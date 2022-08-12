import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { StudentManagmentModule } from './student-managment/student-managment.module';
import { ProductManagementModule } from './product-management/product-management.module';

@Module({

  imports: [UserModule, StudentManagmentModule, ProductManagementModule],

  controllers: [AppController],


  providers: [AppService],
})
export class AppModule {}
