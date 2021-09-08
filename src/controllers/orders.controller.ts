import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import { OrderService } from 'src/services/order.service'
import { Order } from 'src/models/order'
@Controller('orders')
export class OrderController {

    constructor(private orderService: OrderService) {}
    //Path as GET /orders
    @Get()
    async getAll(): Promise<Order[]>{ return this.orderService.findAll() }
    //Path with parameter as GET /orders/{orderNumber}
    @Get(':orderNumber')
    async getByOrderNumber(@Param('orderNumber') orderNumber): Promise<Order>{ return this.orderService.findByOrderNumber(orderNumber) }
    // Path with Body as POST /orders
    @Post()
    async saveOrder(@Body() order: Order): Promise<Order>{ return this.orderService.saveOrder(order) }

    @Put()
    async updateOrder(@Body() order: Order): Promise<Order>{ return this.orderService.updateOrder(order) }

    @Delete(':orderNumber')
    async deleteByOrderNumber(@Param('orderNumber') orderNumber): Promise<boolean>{ 
        await this.orderService.deleteOrder(orderNumber) 
        return true
    }
}