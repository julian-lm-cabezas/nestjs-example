import {Controller, Get, Post, Put, Delete} from '@nestjs/common'
import { OrderService } from 'src/services/order.service'
import { Order } from 'src/models/order'
@Controller('orders')
export class OrderController {

    constructor(private orderService: OrderService) {}
    
    @Get()
    async getAll(): Promise<Order[]>{ return this.orderService.findAll() }
}