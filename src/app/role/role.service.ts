import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RoleEntity } from '@app/role/entity/role.entity';
import { RoleRespDo, RoleDo } from '@app/role/dto/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>,
    ) { }


    async create(role: RoleDo): Promise<RoleRespDo> {
        const { name } = role;
        let roleData = await this.roleRepository.findOne({ where: { name } });
        roleData = await this.roleRepository.create(role);
        await this.roleRepository.save(roleData);
        return roleData;
    }

    async findAll(): Promise<RoleRespDo[]> {
        const roles = await this.roleRepository.find();
        return roles;
    }

    async findById(id: string): Promise<RoleRespDo> {
        let roleData = await this.roleRepository.findOne({ where: { id: id } });
        return roleData;
    }
}