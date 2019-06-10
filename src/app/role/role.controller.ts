import { Controller, Get, Request, Param, Post, HttpCode, Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { RoleDto, RoleRespDto } from '@app/role/dto/role.dto';
import { RoleService } from '@app/role/role.service';

@ApiBearerAuth()
@ApiUseTags('customers')
@Controller()
export class RoleController {

  constructor(private readonly roleService: RoleService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Created Successfully!!' })
  async create(@Body() createUserDto: RoleDto) {
    return this.roleService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: RoleRespDto, isArray: true, description: 'Returns Users' })
  async findAll(): Promise<RoleRespDto[]> {
    return this.roleService.findAll();
  }

}
