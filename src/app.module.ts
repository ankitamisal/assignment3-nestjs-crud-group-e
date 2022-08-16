import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductManagementModule } from './product-management/product-management.module';





@Module({
  imports: [ProductManagementModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }