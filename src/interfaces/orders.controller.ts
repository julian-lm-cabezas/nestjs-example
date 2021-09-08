import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import { OrderQueryService } from 'src/application/queryServices/order.query.service'
import { OrderCommandService } from 'src/application/commandServices/order.command.service'
import { Order } from 'src/domain/models/entities/order'
@Controller('orders')
export class OrderController {

    constructor(private queryService: OrderQueryService, private commandService: OrderCommandService) {}
    //Path as GET /orders
    @Get()
    async getAll(): Promise<Order[]>{ return this.queryService.findAll() }
    //Path with parameter as GET /orders/{orderNumber}
    @Get(':id')
    async getByOrderNumber(@Param('id') id: string): Promise<Order>{ return this.queryService.findById(id) }
    // Path with Body as POST /orders
    @Post()
    async saveOrder(@Body() order: Order): Promise<Order>{ return this.commandService.saveOrder(order) }

    @Put()
    async updateOrder(@Body() order: Order): Promise<Order>{ return this.commandService.updateOrder(order) }

    @Delete(':id')
    async deleteByOrderNumber(@Param('id') id: string): Promise<boolean>{ 
        await this.commandService.deleteOrder(id) 
        return true
    }
}