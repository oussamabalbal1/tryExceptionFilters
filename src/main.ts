import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    //setup the HTTPEXPETIONFILTER global-scoped
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();

