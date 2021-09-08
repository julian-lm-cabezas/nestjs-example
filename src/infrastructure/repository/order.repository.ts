import { Injectable } from '@nestjs/common'
import {Order} from 'src/domain/models/entities/order'

@Injectable()
export class OrderRepository{
    private orders: Order[] = [{id: '1', orderNumber: 1234, storeCode: 11, orderType: 'PC', orderLines:[]}]

    findAll = async(): Promise<Order[]> => this.orders
    findById = async (id: string): Promise<Order> => this.orders.find((o:Order)=> o.id===id)
    addOne = async (order: Order): Promise<Order> => { this.orders.push(order); return order}
    updateOne = async (order: Order): Promise<Order> => { 
        let orderFound: Order = this.orders.find((o:Order)=> o.id===order.id)
        if(orderFound) {
            orderFound= order
            return orderFound
        }else return null
    }
    deletebyId = async (id: string): Promise<void> => { this.orders=this.orders.filter((o:Order)=> o.id!==id) }
}