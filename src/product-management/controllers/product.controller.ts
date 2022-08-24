import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { } from '../models/product.entity';
import { ProductPost } from '../models/product.interface';


// import { ProductPost } from '../models/product.entity';
//import {} from '../models/product.interface'
import { ProductService } from '../services/product.service';

import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'url';
import { CreateUserModel } from '../models/productModel';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('product')
export class ProductController {
  imagepath: string;
  constructor(private ProductService: ProductService) { }
  @Post()
  create(@Body() productPost: CreateUserModel): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }
  @Get('/allData')

  findPost(): Observable<ProductPost[]> {

    return this.ProductService.findAllPost();
  }
  @Get(':id')
  findPostId(@Param('id') id: number): Observable<ProductPost> {
    return this.ProductService.findById(id);
  }
  @Put(':id')
  updatePost(
    @Param('id') id: number,
    @Body() productPost: ProductPost,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch(':id')
  updateSomeData(@Param('id') id: number, @Body() feedPost: ProductPost): Observable<UpdateResult> {
    return this.ProductService.updateSomeData(id, feedPost)
  }
  @Delete(':id')
  deletePost(@Param('id') id: number): Observable<DeleteResult> {
    return this.ProductService.DeleteData(id)
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image', { dest: "./uploads", }))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  //   return fileURLToPath
  // }



  // @Get('/allData')

  // findPost(): Observable<ProductPost[]> {

  //   return this.ProductService.findAllPost();
  // }


  // @Get()
  // image(){
  //   return resizeBy.sendFile()
  // }

  // @Get('amit')
  // seeUploadedFile(@Param('amit') image, @Res() res) {
  //   return res.sendFile(image, { root: './uploads' });
  // }
  // @Get(':imgpath')
  // seeUploadedFile(@Param('imgpath') image, @Res() res) {
  //   return res.sendFile(image, { root: 'uploads' });
  // }


  @Post('image')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './images',
      filename: (req, image, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(image.originalname);
        // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      }
    }),
  }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return "file upload API";
  }
  @Get('image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
  @Get('image')
  seeUploadedFileall(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
