import { Controller, Get, Request, Param, Post, HttpCode, Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';

import { RoleCreateDto, RoleRespDto } from '@app/role/dto/role.dto';
import { RoleService } from '@app/role/role.service';
import { HelperFunction } from '@common/_functions/helper.function';

@ApiBearerAuth()
@ApiUseTags('customers')
@Controller()
export class RoleController {

  constructor(private readonly roleService: RoleService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Success' })
  async create(@Body() roleDto: RoleCreateDto) {
    HelperFunction.loggerService("roleDto",roleDto);
    // return this.roleService.create(roleDto);
  }

  @Get('/all')
  @ApiResponse({ status: 200, type: RoleRespDto, isArray: true, description: 'Success' })
  async findAll(): Promise<RoleRespDto[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id'})
  @ApiResponse({ status: 200, type: RoleRespDto, isArray: false, description: 'Success' })
  async findById(@Param('id') id): Promise<RoleRespDto> {
    return this.roleService.findById(id);
  }

}
