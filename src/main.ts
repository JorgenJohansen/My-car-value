import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



//whitelist makes sure we can't send
//other flags in our request
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000);
}
bootstrap();
