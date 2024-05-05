import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception-filters/http-exception-filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //passing the class of HttpExceptionFilter for enabling dependency injection [@UseFilters(HttpExceptionFilter)]
  //instead of creating the instance of HttpExceptionFilter [@UseFilters(new HttpExceptionFilter())]
  //setup the filter on route level
  // @UseFilters(HttpExceptionFilter)
  getHello(): string {
    //Any exception type of HttpException will be filtered and will return custom json
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.appService.getHello();
  }
}

//setup the filter on Controller level
    // @Controller()
    // @UseFilters(HttpExceptionFilter)
    // //Any exception type of HttpException on this controller will be filtered and will return custom json
    // export class AppController {
    //   constructor(private readonly appService: AppService) {}

    //   @Get()
    //   getHello(): string {
    //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    //     return this.appService.getHello();
    //   }
    // }
