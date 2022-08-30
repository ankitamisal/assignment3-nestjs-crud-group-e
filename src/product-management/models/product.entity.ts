// export interface ProductPost{
//     id?:number;
//     productName?:string;
//     price?:string;
//     stock?:string;
//     size?:string;
//     image?:string;
//     createdAt?:Date;
// }
//import { type } from 'os';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { timestamp } from 'rxjs';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { product_Categories } from './oneToMany.entity';
//import {v4 as uuidv4} from 'uuid';

export enum ProductData {
  AVAILABLE = "Available",
  OUTOFSTOCK = "OutOfStock"
}
export enum ProductSize {
  SMALL = "S",
  MEDIUM = "M",
  LARGE = "L",
  EXTRALARGE = "XL"
}
@Entity('product_post')


export class ProductPostEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: '' })
  @IsNotEmpty()
  productName: string;

  @Column({ type: "int" })
  price: number;

  @Column({ type: 'enum', enum: ProductData, default: null })
  stock: ProductData;

  // @Column({ type: 'enum', enum: ProductSize, default: null })
  // size: ProductSize;

  @Column({ default: '' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;


  @ManyToMany(() => product_Categories)
  @JoinTable({
    name: 'join_product',
  })
  //public product:
  public categories: product_Categories[]

  // @OneToMany( typeFunctionOrTarget:()=>OneToMany,)
  //@OneToMany(()=>product_Categories,(post:product_Categories)=>post.user)
  // @OneToMany(() => product_Categories, (pro: product_Categories) => pro.post)
  // public products: product_Categories[]


}
