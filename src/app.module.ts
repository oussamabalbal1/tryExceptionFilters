import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception-filters/http-exception-filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [AppService,
    //In most cases, registering the filter within the `AppModule` is recommended as it provides more flexibility and potential for modularization.
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    /*
    - **Registration Method:** This approach involves registering the `HttpExceptionFilter` as a provider within the `providers` array of the `AppModule`.
    - **Scope:** The filter is automatically considered global-scoped due to its registration within the `AppModule`. This means a single instance of the filter is created and shared across the entire application.
    - **Granularity:** This method offers finer control over the filter's scope. You can choose to register it globally or within specific modules if needed.
     */
  ],
})
export class AppModule {}
