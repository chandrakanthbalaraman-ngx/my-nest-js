import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';

import { CustomerModule } from '@app/customer/customer.module';
import { RoleModule } from '@app/role/role.module';

const routes: Routes = [
  {
    path: '/customer',
    module: CustomerModule,
  },
  {
    path: '/roles',
    module: RoleModule,
  }
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
      logging: true,
    }),
  ],
})
export class AppModule { }
