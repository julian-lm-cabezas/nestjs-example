import { Module } from '@nestjs/common';
import { AppController } from 'src/interfaces/app.controller';
import { OrderController } from 'src/interfaces/orders.controller';
import { OrderQueryService } from 'src/application/queryServices/order.query.service';
import { OrderCommandService } from 'src/application/commandServices/order.command.service';
import { OrderRepository } from 'src/infrastructure/repository/order.repository';

@Module({
  imports: [],
  controllers: [AppController, OrderController],
  providers: [OrderQueryService, OrderCommandService],
})
export class AppModule {}
