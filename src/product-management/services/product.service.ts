import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductPostEntity } from '../models/product.entity';
import { product_Categories } from '../models/oneToMany.entity'
import { ProductPost } from '../models/product.interface';
import { productOneToMany } from "../models/oneTomany.interface"
import { categories } from '../models/categories.entity';
// import { ProductPostEntity } from '../model/post.entity';
// import { ProductPost } from '../model/post.interface';
//import {v4 as uuidv4} from 'uuid';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductPostEntity)
        private readonly ProductPostRepository: Repository<ProductPostEntity>,
        @InjectRepository(categories)
         private readonly categories: Repository<categories>


    ) { }
    // CREATE DATA:
    createPost(feedPost: ProductPost): Observable<ProductPost> {
        return from(this.ProductPostRepository.save(feedPost))
    }
    //create product size

    // createproduct(product_size:product_Categories):Observable<productOneToMany>{
    //     return 
    // }




    // FIND ALL DATA:
    findAllPost(): Observable<ProductPost[]> {
        return from(this.ProductPostRepository.find())
    }
    // FIND DATA BY ID:
    findById(id: number): Observable<ProductPost> {
        return from(this.ProductPostRepository.findOneBy({ id }))
    }
    // UPDATE THE WHOLE DATA:
    updateData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
        return from(this.ProductPostRepository.update(id, feedPost))
    }
    // UPDATE SOME FEILDS OF THE DATA:
    updateSomeData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
        return from(this.ProductPostRepository.update(id, feedPost))
    }
    // DELETE THE DATA THROUGH ID:
    DeleteData(id: number): Observable<DeleteResult> {
        return from(this.ProductPostRepository.delete(id))
    }



}
