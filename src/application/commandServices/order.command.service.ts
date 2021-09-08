import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/entities/order'
import { OrderRepository} from 'src/infrastructure/repository/order.repository'
@Injectable()
export class OrderCommandService {

    constructor(private orderRepository: OrderRepository){}

    saveOrder = async (order: Order): Promise<Order> => this.orderRepository.addOne(order)
       
    updateOrder = async (order: Order): Promise<Order> => this.orderRepository.updateOne(order)

    deleteOrder = async (id: string): Promise<void> => this.orderRepository.deletebyId(id)
       
}