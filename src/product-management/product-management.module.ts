import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoriesController } from './controllers/categories.controller';
import { ProductSizeController } from './controllers/oneToMany.controller';
import { ProductController } from './controllers/product.controller';
import { categories } from './models/categories.entity';
import { product_Categories } from './models/oneToMany.entity';
import { ProductPostEntity } from './models/product.entity';
import { categories_service } from './services/categories.service';
import { oneToMany_service } from './services/oneToMany.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity, product_Categories, categories])
  ],
  controllers: [ProductController, ProductSizeController, categoriesController],
  providers: [ProductService, oneToMany_service, categories_service]
})
export class ProductModule { }
