import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './controllers/orders.controller';
import { OrderService } from './services/order.service';

@Module({
  imports: [],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
