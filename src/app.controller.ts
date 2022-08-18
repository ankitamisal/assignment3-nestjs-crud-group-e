
import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Response,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Post('/uploads')
  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  uploadedFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: 'uploads' });
  }
}
