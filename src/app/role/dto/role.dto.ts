import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CommonFieldDto } from '@common/_dto/common.dto';
const classes = require('extends-classes');

export class RoleDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}

export class RoleRespDto extends classes(RoleDto, CommonFieldDto) {
  @ApiModelProperty()
  @IsInt()
  readonly id: number;
}
