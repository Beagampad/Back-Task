import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from 'ws' 

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useWebSocketAdapter(new WsAdapter(app)) 
  await app.listen(3000);
}
bootstrap();
