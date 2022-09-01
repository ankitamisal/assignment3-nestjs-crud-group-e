import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { product_Categories } from '../models/oneToMany.entity';
import { productOneToMany } from "../models/oneTomany.interface"


@Injectable()
export class oneToMany_service {
    constructor(
        @InjectRepository(product_Categories)
        private readonly oneToManyRepository: Repository<product_Categories>

    ) { }
    createproductsize(productsize: productOneToMany): Observable<productOneToMany> {
        return from(this.oneToManyRepository.save(productsize))
    }


    findAllData(): Observable<product_Categories[]> {
        return from(this.oneToManyRepository.find())

    }

}