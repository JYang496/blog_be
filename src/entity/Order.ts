import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, ManyToMany
} from "typeorm";
import {IsEmail, Length, Max, Min} from "class-validator";
import {User} from "./User";
import {Product} from "./Product";
import {JoinTable} from "typeorm/browser";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal',{precision: 5, scale: 2})
    @Min(0)
    price: number

    @Column('decimal',{precision: 5, scale: 2})
    @Min(0)
    totalPrice: number


    @Column('decimal',{precision: 5, scale: 2, default: 1.00})
    @Min(1)
    taxRate: number

    @ManyToOne(()=>User, user => user.orders)
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

    @Column({nullable:true, default:false})
    isActive: boolean

    @Column({nullable:true, default:false})
    isDelete: boolean

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updateAt: Date

}
