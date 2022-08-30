import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, getSchemaPath } from '@nestjs/swagger';
import { CreateLanguageDto } from '../dto/create-language.dto';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(private readonly LanguageService: LanguageService) {}
    @Post()
    @ApiBody({
      schema: {$ref: getSchemaPath(CreateLanguageDto)}
      
    })
    create(@Body() CreateLanguageDto: CreateLanguageDto) {
      return this.LanguageService.create(CreateLanguageDto);
    }
    @Get()
    findAll() {
      return this.LanguageService.findAllBooks();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.LanguageService.getOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() CreateLanguageDto: CreateLanguageDto) {
      return this.LanguageService.updatePutLanguage(id, CreateLanguageDto);
    }
  @Put(":id")
  updatePut(@Param('id') id: number, @Body() CreateLanguageDto: CreateLanguageDto){
    return this.LanguageService.updatePutLanguage(id, CreateLanguageDto);
  }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.LanguageService.deleteLanguage(+id);
    }
  
  }

