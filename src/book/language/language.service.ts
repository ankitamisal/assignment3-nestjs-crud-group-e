import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateLanguageDto } from '../dto/create-language.dto';
import { LanguagetEntity } from '../entities/Language.entity';
import {language} from '../entities/languag.interface'
import { from, Observable } from 'rxjs';

@Injectable()
export class LanguageService {
    constructor(@InjectRepository(LanguagetEntity)
    private readonly languageRepository: Repository<LanguagetEntity>){}

    
    create(language: language): Observable<language> {
        return from(this.languageRepository.save(language));
    }

    findAllBooks(): Observable<language[]> {
        return from(this.languageRepository.find());
    }
    getOne(id:number):Observable<language> {
        const Language_id=id;
        return from(this.languageRepository.findOneBy({Language_id}))

    }

    updatePutLanguage(id: number, language: language): Observable<UpdateResult>{
        return from(this.languageRepository.update(id,language));
    }

    updatePatchLanguage(id: number, language: language): Observable<UpdateResult>{
        return from(this.languageRepository.update(id,language));
    }

    deleteLanguage(id: number): Observable<DeleteResult> {
        return from(this.languageRepository.delete(id));
    }
}
