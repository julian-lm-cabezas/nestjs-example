import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';
import { OrderQueryService } from '../application/queryServices/order.query.service'   ///application/queryServices/order.query.service'
import { OrderCommandService } from '../application/commandServices/order.command.service'
import { Order } from '../domain/models/entities/order'
import { LMESCommandController, LMESQueryController } from '../utils/LMESRestController';

// use ApiTags to include controller calls under swagger Tag
@ApiTags('orders')
@Controller('orders')
export class OrderController implements LMESQueryController<Order>, LMESCommandController<Order>{

    constructor(private queryService: OrderQueryService, private commandService: OrderCommandService) {}
    
    @Get()
    async findAll(): Promise<Order[]>{ return this.queryService.findAll() }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order>{ return this.queryService.findById(id) }
   
    findByCriteria(query: any): Promise<Order[]>{ return null }

    @Post()
    async insertOne(order: Order): Promise<Order>{ return this.commandService.insertOne(order) }
    @Put()
    updateOne(@Body() order: Order): Promise<Order>{ return this.commandService.updateOne(order) }
    
    @Delete()
    async deleteOne(@Param('id') id: string): Promise<boolean>{ 
        await this.commandService.deleteOne(id) 
        return true
    }
}