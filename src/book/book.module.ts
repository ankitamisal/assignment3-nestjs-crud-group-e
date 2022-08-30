import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import {LanguagetEntity } from './entities/Language.entity';
import { LanguageController } from './language/language.controller';
import { LanguageService } from './language/language.service';
import { BookLanguage } from './entities/BookLanguage.entity';

@Module({
  controllers: [BookController, LanguageController],
  providers: [BookService, LanguageService],
  imports:[
    TypeOrmModule.forFeature([BookEntity,LanguagetEntity,BookLanguage])
  ],
})
export class BookModule {}
