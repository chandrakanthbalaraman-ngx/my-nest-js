import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule,Routes } from 'nest-router';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from '@app/customer/customer.module';
import { RoleModule } from '@app/role/role.module';

const routes: Routes = [
  {
    path: '/customer',
    module: CustomerModule,
    children: [
      {
        path: '/roles',
        module: RoleModule,
      }
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes), 
    CustomerModule,
    RoleModule,
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
  controllers: [
    AppController
  ],

  providers: [AppService],
})
export class AppModule { }
