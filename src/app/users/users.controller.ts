import { Controller, Get, Request, Param,Post, HttpCode,Header, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { UserService } from '@app/users/user.service';
import { CreateUserDto } from '@app/users/dto/user.dto';
import { User } from '@app/users/interface/user.interface';

@ApiBearerAuth()
@ApiUseTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiResponse({status: 200, description: 'Created Successfully!!'})
    async create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Get()
    @ApiResponse({status: 200, type: CreateUserDto, isArray: true, description: 'Returns Users'})
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }

}
