import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductManagementModule } from './product-management/product-management.module';

import { StudentManagmentModule } from './student-managment/student-managment.module';

@Module({
  imports: [StudentManagmentModule,ProductManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}






  
