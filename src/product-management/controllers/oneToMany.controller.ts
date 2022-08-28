import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { } from '../models/product.entity';
import { ProductPost } from '../models/product.interface';

import { productOneToMany } from "../models/oneTomany.interface"
import { oneToMany_service } from '../services/oneToMany.service';
import { DiffieHellmanGroup } from 'crypto';
import { product_model } from '../models/oneToMany.Model';

@Controller("size")
export class ProductSizeController {
    constructor(private productSizeService: oneToMany_service) { }
    @Get()
    hello() {
        return "hiii amit"
    }
    @Post()

    createsize(@Body() productSize: product_model): Observable<productOneToMany> {
        return this.productSizeService.createproductsize(productSize)
    }



}
