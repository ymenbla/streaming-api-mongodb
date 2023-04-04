import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Streaming Mov Api')
    .setDescription('The API to access to movies')
    .setVersion('1.0')
    .addTag('Movies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1.0/swagger', app, document);

  await app.listen(port, () => {
    console.log(`*** RUNNING SERVER POR ${port} ***`);
  });
}
bootstrap();
