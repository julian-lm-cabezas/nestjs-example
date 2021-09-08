import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/infrastructure/repository/order.repository';
import { OrderController } from 'src/interfaces/orders.controller';
import { OrderQueryService } from 'src/application/queryServices/order.query.service';
import { OrderCommandService } from 'src/application/commandServices/order.command.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderRepository])],
    controllers: [OrderController],
    providers: [OrderQueryService, OrderCommandService],
  })
  export class OrderModule {}