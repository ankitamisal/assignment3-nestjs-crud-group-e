import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSizeController } from './controllers/oneToMany.controller';
import { ProductController } from './controllers/product.controller';
import { product_Categories } from './models/oneToMany.entity';
import { ProductPostEntity } from './models/product.entity';
import { oneToMany_service } from './services/oneToMany.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity,product_Categories])
  ],
  controllers: [ProductController,ProductSizeController],
  providers: [ProductService,oneToMany_service]
})
export class ProductModule { }
