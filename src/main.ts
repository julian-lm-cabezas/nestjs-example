import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './config/app.module';
import { LoggerConfig } from './config/logger.config';
const pack = require('../package.json')
const { getEnv }  = require('./config/environment')


const bootstrap = async ()=> {
  const app = await NestFactory.create(AppModule,{
    logger: WinstonModule.createLogger(new LoggerConfig().loadOptions())
  });
  
  const config = new DocumentBuilder()
    .setTitle(pack.name)
    .setDescription(pack.description)
    .setVersion(pack.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
  await app.listen(getEnv().port);

}
bootstrap();
