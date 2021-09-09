import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { OrderLine } from '../vos/orderLine';

@Entity({name: "nestExampleOrders"})
export class Order {
    @ObjectIdColumn()
    _id: string
    @Column()
    orderNumber: number;
    @Column()
    storeCode: number;
    @Column()
    orderType: string;
    @Column()
    lines: OrderLine[];
}