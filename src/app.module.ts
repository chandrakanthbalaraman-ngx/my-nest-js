import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from '@app/customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true
    }),
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }
