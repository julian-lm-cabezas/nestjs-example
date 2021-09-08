import { Controller, Get, Query, Req} from '@nestjs/common';
import { Request } from 'express';

//Generic HealthCheck
@Controller()
export class AppController {
  @Get('/health')
  getHealth(): string { return 'server up & running'; }

  //access query params  [example => /queryParam?id=1&name=Peter]
  @Get('/queryParams')
  getQuery(@Query() query: any): any { return query; }

  //access request/response headers
  @Get('/headers')
  getHeaders(@Req() req: Request): any { return {headers: req.headers} }
}
