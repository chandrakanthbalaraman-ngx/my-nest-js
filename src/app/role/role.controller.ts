import { Controller, Get, Request, Param, Post, HttpCode, Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';

import { RoleDo, RoleRespDo } from '@app/role/dto/role.dto';
import { RoleService } from '@app/role/role.service';
import { HelperFunction } from '@common/_functions/helper.function';

@ApiBearerAuth()
@ApiUseTags('roles')
@Controller()
export class RoleController {

  constructor(private readonly roleService: RoleService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Success' })
  async create(@Body() roleDto: RoleDo) {
    HelperFunction.loggerService("roleDto",roleDto);
    return this.roleService.create(roleDto);
  }

  @Get('/all')
  @ApiResponse({ status: 200, type: RoleRespDo, isArray: true, description: 'Success' })
  async findAll(): Promise<RoleRespDo[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id'})
  @ApiResponse({ status: 200, type: RoleRespDo, isArray: false, description: 'Success' })
  async findById(@Param('id') id): Promise<RoleRespDo> {
    return this.roleService.findById(id);
  }

}
