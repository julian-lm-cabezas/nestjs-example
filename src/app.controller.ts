import { Controller, Get } from '@nestjs/common';

//Generic HealthCheck
@Controller()
export class AppController {
  @Get('/health')
  getHealth(): string { return 'server up & running'; }
}
