import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import superclass from '@specialblend/superclass'


import { CommonFieldDto } from '@common/_dto/common.dto';
import { HelperFunction } from '@common/_functions/helper.function';

export class RoleDo{
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}


export class RoleRespDo extends CommonFieldDto{
  @ApiModelProperty()
  @IsInt()
  readonly id: number;

  @ApiModelProperty()
  @IsString()
  readonly name: string;
}

