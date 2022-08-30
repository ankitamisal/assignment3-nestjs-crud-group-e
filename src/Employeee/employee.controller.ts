import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { create } from 'domain';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeModule } from './employee.module';
import { EmployeeService } from './employee.service';
@Controller('Employeee')
export class EmployeeController {
  imagepath: string;
  constructor(private readonly EmployeeService: EmployeeService) {}
  @Post()
  create(@Body() CreateEmployeeDto: CreateEmployeeDto) {
    // CreateEmployeeDto.Emp_profile = this.imagepath;
    return this.EmployeeService.create(CreateEmployeeDto);
  }

  @Get()
  findAll() {
    return this.EmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.EmployeeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateEmployeeDto: UpdateEmployeeDto,
  ) {
    // UpdateEmployeeDto.Emp_profile = this.imagepath;
    return this.EmployeeService.update(+id, UpdateEmployeeDto);
  }

  @Put(':id')
  updateAll(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.EmployeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EmployeeService.remove(id); 
  }
  @Post('/images')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (res, image, callback) => {
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
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }

  // @Post('/images')
  // @UseInterceptors(FileInterceptor('image', { dest: './images' }))
  // uploadedFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }
  // @Get(':imgpath')
  // seeUploadedFile(@Param('imgpath') image, @Res() res) {
  //   return res.sendFile(image, { root: './images' });
  // }

//   @Get('/data')
//  seed(){
//    this.EmployeeService.seed();
//   return 'seed completed';
// }
  
}
