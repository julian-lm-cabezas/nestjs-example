import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { OrderLine } from '../vos/orderLine';
import { ApiProperty } from '@nestjs/swagger';
import { LMESEntity } from 'src/utils/LMESEntity';

@Entity({name: "nestExampleOrders"})
export class Order extends LMESEntity{
    //add Api property to show attributes in Schema
    /*@ApiProperty()
    @ObjectIdColumn()
    _id: string*/
    @ApiProperty()
    @Column()
    orderNumber: number;
    @ApiProperty()
    @Column()
    storeCode: number;
    @ApiProperty()
    @Column()
    orderType: string;
    //Add type to include nested Objects in Schema
    @ApiProperty({ type: () => OrderLine })
    @Column()
    lines: OrderLine[];
}