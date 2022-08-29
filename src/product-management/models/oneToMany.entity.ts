import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { ProductPostEntity } from "./product.entity"
//import { Photo } from "./Photo"

@Entity()
export class product_Categories {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    size: string
    //user: any

    // @ManyToOne(() => many, (photo) => many.user)
    // photos: Photo[]
    // @ManyToOne(() => ProductPostEntity, (post: ProductPostEntity) => post.products)
    // post: ProductPostEntity
}