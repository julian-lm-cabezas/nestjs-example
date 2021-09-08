import { Module } from '@nestjs/common';
import { AppController } from 'src/interfaces/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OrderModule } from './modules/order.module';
const {getEnv} = require('./environment')

console.log(getEnv())
@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: getEnv().mongo_url,
      entities: [join(__dirname, '**/entities/**{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
