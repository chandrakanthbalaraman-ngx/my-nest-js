import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RoleEntity } from '@app/role/entity/role.entity';
import { RoleDto, RoleRespDto } from '@app/role/dto/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>,
    ) { }


    async create(role: RoleDto): Promise<RoleRespDto> {
        const { name } = role;
        let roleData = await this.roleRepository.findOne({ where: { name } });
        roleData = await this.roleRepository.create(role);
        await this.roleRepository.save(roleData);
        return roleData;
    }

    async findAll(): Promise<RoleRespDto[]> {
        const roles = await this.roleRepository.find();
        return roles;
    }
}