import { Controller, Get, Request, Param } from '@nestjs/common';
import { UserService } from '@app/users/user.service';


@Controller()
export class UsersController {

    constructor(private readonly userService: UserService) {}

    @Get('users')
    findAll() {
      return this.userService.getMessage();
    }

    @Get('user/:id')
    findOne(@Param() params) {
        console.log(params.id);
        return this.userService.getMessage(params.id);
    }

}
