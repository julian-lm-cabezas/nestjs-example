import { Module } from '@nestjs/common';
import { AppController } from 'src/interfaces/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OrderModule } from './modules/order.module';
import { Order } from 'src/domain/models/entities/order';
const {getEnv} = require('./environment')

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: getEnv().mongo_url,
      entities: [Order],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      /*extra: {
        //ssl: 'true',
        authSource: 'admin'
      },*/
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
