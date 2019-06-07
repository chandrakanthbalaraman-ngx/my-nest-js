import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@app/users/interface/user.interface';
import { UserEntity } from '@app/users/entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}

    private readonly users: User[] = [];

   async create(user: User): Promise<User> {
        const { name } = user;
        let userData = await this.userRepository.findOne({ where: { name } });
        userData = await this.userRepository.create(user);
        await this.userRepository.save(userData);
        return user;
    }

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find();
        return users;
    }
}