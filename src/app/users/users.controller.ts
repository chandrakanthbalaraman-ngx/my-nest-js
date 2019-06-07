import { Controller, Get, Request, Param,Post, HttpCode,Header } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { UserService } from '@app/users/user.service';

@ApiBearerAuth()
@ApiUseTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    findAll() {
      return this.userService.getMessage();
    }

    @Get(':id/:type')
    findOne(@Param('id') id, @Param('type') type) {
        console.log(type);
        console.log(type);
        return this.userService.getMessage(id);
    }

    @Post()
    create() {
    return 'This action adds a new cat';
    }

}
