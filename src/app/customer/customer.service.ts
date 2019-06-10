import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from '@app/customer/entity/customer.entity';
import { CustomerDto, CustomerRespDto } from '@app/customer/dto/customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ) { }


    async create(customer: CustomerDto): Promise<CustomerRespDto> {
        const { customer_name } = customer;
        let customerData = await this.customerRepository.findOne({ where: { customer_name } });
        customerData = await this.customerRepository.create(customer);
        await this.customerRepository.save(customerData);
        return customerData;
    }

    async findAll(): Promise<CustomerRespDto[]> {
        const customers = await this.customerRepository.find();
        return customers;
    }

    async findById(id: string): Promise<CustomerRespDto> {
        let customerData = await this.customerRepository.findOne({ where: { id: id } });
        return customerData;
    }
}