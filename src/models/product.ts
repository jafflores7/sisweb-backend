import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';
import {Optional} from 'sequelize';

interface ProductAttributes{
    id: number;
    title: string;
    code: number;
    price: number ;
    stock: number ;
}
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}
@Table ({
    tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{
    // Here, TS infers Data Type from the JS Type
    // The ! means that the variable title wont be null or undefine.
    @Column
    title!: string;

    // Here, we set the Data Type explicity
    // The ? means the variable can be null or undefined
    @Column
    code!: number;

    @Column
    price!: number;

    @Column
    stock!: number;

    @CreatedAt
    @Column
    createdAt!: Date;
    
    @UpdatedAt
    @Column
    updatedAt!: Date;
}