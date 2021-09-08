import { Injectable } from '@nestjs/common';
import { Order } from '../models/order'

//Use injectable to add Service to Controller (*autowire)
@Injectable()
export class OrderService {

    //dummy data
    private orders: Order[] = [{orderNumber: 1234, storeCode: 11, orderType: 'PC'}]

    findAll = async (): Promise<Order[]> => this.orders
    
    findByOrderNumber = async (orderNumber: Number): Promise<Order> => this.orders.find((o:Order) => o.orderNumber === orderNumber)
    
    saveOrder = async (order: Order): Promise<Order> => {
        try{
            this.orders.push(order)
        }catch(err){ return null}
    }

    updateOrder = async (order: Order): Promise<Order> => {
        let orderFound: Order = this.orders.find((o:Order) => o.orderNumber === order.orderNumber)
        if(orderFound){
            orderFound.storeCode = order.storeCode
            orderFound.orderType = order.orderType
            return orderFound
        }
        else return null
    }

    deleteOrder = async (orderNumber: Number): Promise<void> => {
        this.orders.filter((o:Order)=> o.orderNumber!==orderNumber)
        return
    }
}