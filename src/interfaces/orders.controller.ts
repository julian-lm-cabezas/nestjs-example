import {Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, BadRequestException} from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags, ApiBadRequestResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { OrderQueryService } from 'src/application/queryServices/order.query.service'
import { OrderCommandService } from 'src/application/commandServices/order.command.service'
import { Order } from 'src/domain/models/entities/order'
import { LMESCommandController, LMESQueryController } from 'src/utils/LMESRestController';
import { ObjectID } from 'mongodb';

// use ApiTags to include controller calls under swagger Tag
@ApiTags('orders')
@Controller('orders')
export class OrderController implements LMESQueryController<Order>, LMESCommandController<Order>{

    constructor(private queryService: OrderQueryService, private commandService: OrderCommandService) {}
    
    @Get()
    @ApiOkResponse({ type: Order, isArray:true, description: 'Returns list of orders'})
    @ApiInternalServerErrorResponse({ description: 'Error fetching orders.'})
    async findAll(): Promise<Order[]>{ return this.queryService.findAll() }
    
    
    @Get(':id')
    @ApiOkResponse({type: Order, description: 'Returns order'})
    @ApiBadRequestResponse({ description:'Bad Request'})
    @ApiNotFoundResponse({ description: 'Order Not Found'})
    @ApiInternalServerErrorResponse({ description: 'Error fetching orders.'})
    async findOne(@Param('id') id: string): Promise<Order>{ 
        if(!ObjectID.isValid(id)) throw new BadRequestException('Bad request')
        const order = await this.queryService.findById(id) 
        if(!order) throw new NotFoundException('Not found');
        else return order
    }
   
    findByCriteria(query: any): Promise<Order[]>{ return null }

    @Post()
    @ApiOkResponse({type: Order, description: 'Returns order'})
    @ApiBadRequestResponse({ description:'Bad Request'})
    @ApiInternalServerErrorResponse({ description: 'Error fetching orders.'})
    @ApiBody({ description: 'order',  type: Order })
    async insertOne(order: Order): Promise<Order>{ return this.commandService.insertOne(order) }


    @Put()
    @ApiOkResponse({type: Order, description: 'Returns order'})
    @ApiBadRequestResponse({ description:'Bad Request'})
    @ApiInternalServerErrorResponse({ description: 'Error fetching orders.'})
    @ApiBody({ description: 'order',  type: Order })
    updateOne(@Body() order: Order): Promise<Order>{ return this.commandService.updateOne(order) }
    
    @Delete()
    @ApiOkResponse({type: Order, description: 'Returns order'})
    @ApiBadRequestResponse({ description:'Bad Request'})
    @ApiNotFoundResponse({ description: 'Order Not Found'})
    @ApiInternalServerErrorResponse({ description: 'Error fetching orders.'})
    async deleteOne(@Param('id') id: string): Promise<boolean>{ 
        await this.commandService.deleteOne(id) 
        return true
    }
}