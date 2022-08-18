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
import { CreateUserModel } from '../models/product.Model';

@Controller('feed')
export class ProductController {
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
  findPostId(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Observable<ProductPost> {
    return this.ProductService.findById(id);
  }
  @Put(':id')
  updatePost(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() productPost: ProductPost,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch(':id')
  updateSomeData(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() feedPost: ProductPost): Observable<UpdateResult> {
    return this.ProductService.updateSomeData(id, feedPost)
  }
  @Delete(':id')
  deletePost(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Observable<DeleteResult> {
    return this.ProductService.DeleteData(id)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', { dest: "./uploads", }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return fileURLToPath
  }



  // @Get('/allData')

  // findPost(): Observable<ProductPost[]> {

  //   return this.ProductService.findAllPost();
  // }


  // @Get()
  // image(){
  //   return resizeBy.sendFile()
  // }

  @Get('amit')
  seeUploadedFile(@Param('amit') image, @Res() res) {
    return res.sendFile(image, { root: 'file:///C:/Users/amit.kumar10/Desktop/product/assignment3-nestjs-crud-group-e/uploads/' });
  }

}
