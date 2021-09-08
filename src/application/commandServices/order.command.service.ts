import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/entities/order'
import { OrderRepository } from 'src/infrastructure/repository/order.repository';
@Injectable()
export class OrderCommandService {

    constructor(private orderRepository: OrderRepository){}

    saveOrder = async (order: Order): Promise<Order> => this.orderRepository.save(order)
       
    updateOrder = async (order: Order): Promise<Order> => {
        let { affected } = await this.orderRepository.update(order._id,order)
        return affected>0 ? order: null
    }

    deleteOrder = async (id: string): Promise<void> => { await this.orderRepository.delete(id) }
       
}