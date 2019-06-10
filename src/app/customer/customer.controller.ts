import { Controller, Get, Request, Param, Post, HttpCode, Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { CustomerDto, CustomerRespDto } from '@app/customer/dto/customer.dto';
import { CustomerService } from '@app/customer/customer.service';

@ApiBearerAuth()
@ApiUseTags('customers')
@Controller()
export class CustomerController {

  constructor(private readonly customerService: CustomerService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Created Successfully!!' })
  async create(@Body() createUserDto: CustomerDto) {
    return this.customerService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: CustomerRespDto, isArray: true, description: 'Returns Users' })
  async findAll(): Promise<CustomerRespDto[]> {
    return this.customerService.findAll();
  }

}
