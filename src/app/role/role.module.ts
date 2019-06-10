import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from '@app/role/entity/role.entity';
import { RoleController } from '@app/role/role.controller';
import { RoleService } from '@app/role/role.service';




@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule { };