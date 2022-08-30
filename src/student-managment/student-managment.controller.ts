import {
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';

// import { remove } from '@vue/shared';
// import { create } from 'domain';
// import { get } from 'http';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentManagmentService } from './student-managment.service';

@Controller('student-managment')
export class StudentManagmentController {
  imagepath: string;

  constructor(
    private readonly StudentManagmentService: StudentManagmentService,
  ) {}
  @Post()
  create(@Body() CreateStudentDto: CreateStudentDto) {
    CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.create(CreateStudentDto);
  }
  @Get()
  findAll() {
    return this.StudentManagmentService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.StudentManagmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatStudentDto: UpdateStudentDto) {
    //CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.update(+id, UpdatStudentDto);
  }

  @Put(':id')
  updateAll(
    @Param('id') id: string,
    @Body() updatStudentDto: UpdateStudentDto,
  ) {
   // CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.update(+id, updatStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudentManagmentService.remove(+id);
  }
  @Post('/images')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('show/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
