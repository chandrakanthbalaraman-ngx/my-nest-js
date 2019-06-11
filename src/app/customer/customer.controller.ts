import { Controller, Get, Request, Param, Post, HttpCode, Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';

import { CustomerCreateDto, CustomerRespDto } from '@app/customer/dto/customer.dto';
import { CustomerService } from '@app/customer/customer.service';

@ApiBearerAuth()
@ApiUseTags('customers')
@Controller()
export class CustomerController {

  constructor(private readonly customerService: CustomerService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Success' })
  async create(@Body() createUserDto: CustomerCreateDto) {
    return this.customerService.create(createUserDto);
  }

  @Get('/all')
  @ApiResponse({ status: 200, type: CustomerRespDto, isArray: true, description: 'Success' })
  async findAll(): Promise<CustomerRespDto[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id'})
  @ApiResponse({ status: 200, type: CustomerRespDto, isArray: false, description: 'Success' })
  async findById(@Param('id') id): Promise<CustomerRespDto> {
    return this.customerService.findById(id);
  }

}
