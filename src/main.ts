import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Commerce')
  .setDescription('The Commerce API description')
  .setLicense('Apache 2.0','https://www.apache.org/licenses/LICENSE-2.0.html')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
