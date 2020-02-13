import { Controller, Get, Query, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('test')
  getHello(@Query() query): string {
    console.log(typeof query.status);
    return this.appService.getHello();
  }

  @Get('test/testing/:status')
  getTest(@Param('status') status): string {
    console.log(typeof status);
    return this.appService.getHello();
  }
}
