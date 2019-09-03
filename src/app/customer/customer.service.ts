import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from '@app/customer/entity/customer.entity';
import { CustomerRespDo, CustomerDo } from '@app/customer/dto/customer.dto';
import { debug } from 'util';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ) { }


    async create(customer: CustomerDo): Promise<CustomerRespDo> {
        const { customer_name } = customer;
        let customerData = await this.customerRepository.findOne({ where: { customer_name } });
        customerData = await this.customerRepository.create(customer);
        await this.customerRepository.save(customerData);
        return customerData;
    }

    async findAll(): Promise<CustomerRespDo[]> {
        const customers = await this.customerRepository.find({ relations: ["role"] });
        return customers;
    }

    async findById(id: string): Promise<CustomerRespDo> {
        let customerData = await this.customerRepository.findOne({ where: { id: id } });
        return customerData;
    }
}