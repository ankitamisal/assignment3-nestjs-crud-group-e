import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinTable } from "typeorm"
import { ProductPostEntity } from "./product.entity"
//import { Photo } from "./Photo"

@Entity()
export class product_Categories {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    size: string
    //user: any
    @ManyToMany(() => ProductPostEntity)
    @JoinTable()
    product: ProductPostEntity[]

    // @ManyToOne(() => many, (photo) => many.user)
    // photos: Photo[]
    // @ManyToOne(() => ProductPostEntity, (post: ProductPostEntity) => post.products)
    // post: ProductPostEntity
}