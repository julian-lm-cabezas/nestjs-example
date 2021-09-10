import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/entities/order'
import { OrderRepository } from 'src/infrastructure/repository/order.repository';
import { LMESCommandService } from 'src/utils/LMESService';
@Injectable()
export class OrderCommandService implements LMESCommandService<Order>{

    constructor(private orderRepository: OrderRepository){}
    insertOne = async (order: Order): Promise<Order> => this.orderRepository.save(order)
    updateOne = async (order: Order): Promise<Order> => {
        let { affected } = await this.orderRepository.update(order._id,order)
        return affected>0 ? order: null
    }
    deleteOne= async (id: string): Promise<void> => { await this.orderRepository.delete(id) }       
}