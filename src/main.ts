import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { APP_CONFIG } from '@common/const/config-const';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APP_CONFIG.APP_VERSION);
  const options = new DocumentBuilder()
    .setTitle('Commerce')
    .setDescription('The Commerce API description')
    .setLicense('Apache 2.0', 'https://www.apache.org/licenses/LICENSE-2.0.html')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
