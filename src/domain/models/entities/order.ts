import { Entity, Column, ObjectIdColumn } from 'typeorm';

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
    /*@Column()
    orderLines: OrderLine[];*/
}