import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/entities/order'
import { OrderRepository} from 'src/infrastructure/repository/order.repository'

@Injectable()
export class OrderQueryService {
    
    constructor(@InjectRepository orderRepository: OrderRepository){}

    findAll = async (): Promise<Order[]> => this.orderRepository.findAll()
    
    findById = async (id: string): Promise<Order> => this.orderRepository.findById(id)
}