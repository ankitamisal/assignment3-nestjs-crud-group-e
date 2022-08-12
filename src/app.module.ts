import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentManagmentModule } from './student-managment/student-managment.module';

@Module({
  imports: [StudentManagmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
