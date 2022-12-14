import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, Res, UseInterceptors, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiBody, getSchemaPath } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  imagepath: string;
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiBody({
    schema: {$ref: getSchemaPath(CreateBookDto)}
    
  })
  create(@Body() createBookDto: CreateBookDto) {
    
    return this.bookService.create(createBookDto);
  }
  @Get()
  findAll() {
    return this.bookService.findAllBooks();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() createBookDto: UpdateBookDto) {
    return this.bookService.updatePutBook(id, createBookDto);
  }
@Put(":id")
updatePut(@Param('id') id: number, @Body() createBookDto: UpdateBookDto){
  return this.bookService.updatePutBook(id, createBookDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(+id);
  }

}