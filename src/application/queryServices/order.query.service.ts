import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/entities/order'
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from 'src/infrastructure/repository/order.repository';
@Injectable()
export class OrderQueryService {
    
    constructor(private orderRepository: OrderRepository){}

    findAll = async (): Promise<Order[]> => this.orderRepository.find()
    
    findById = async (id: string): Promise<Order> => this.orderRepository.findOne(id)
}