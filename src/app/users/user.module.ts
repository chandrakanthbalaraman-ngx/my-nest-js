import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '@app/users/users.controller';
import { UserService } from '@app/users/user.service';
import { UserEntity } from '@app/users/entity/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule {};