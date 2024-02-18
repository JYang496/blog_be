import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
} from "typeorm";
import {IsEmail, Length, Max, Min} from "class-validator";
import {User} from "./User";

@Entity()
@Unique(['slug'])
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,100)
    slug: string;

    @Column()
    @Length(1,100)
    name: string;

    @Column('decimal',{precision:5, scale:2})
    @Min(0)
    price: number;

    @Column()
    @IsEmail()
    description: string;

    @Column()
    media: string

    @Column({nullable:true, default:false})
    isStaff: boolean

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
