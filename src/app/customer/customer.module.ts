import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from '@app/customer/customer.controller';
import { CustomerService } from '@app/customer/customer.service';
import { CustomerEntity } from '@app/customer/entity/customer.entity';


@Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity])],
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule { };