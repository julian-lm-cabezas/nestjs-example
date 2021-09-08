import { NestFactory } from '@nestjs/core';
import { AppModule } from './config/app.module';
const { getEnv }  = require('./config/environment')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(getEnv().port);
}
bootstrap();
