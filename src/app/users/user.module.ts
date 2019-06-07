import { Module } from '@nestjs/common';
import { UsersController } from '@app/users/users.controller';
import { UserService } from '@app/users/user.service';


@Module({
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule {};