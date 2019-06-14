import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import {Exclude,Expose, classToClass, classToPlain} from "class-transformer";
import { ApiModelProperty } from '@nestjs/swagger';

import { CommonFieldDto } from '@common/_dto/common.dto';
import { HelperFunction } from '@common/_functions/helper.function';

export class RoleDto extends CommonFieldDto{
  @ApiModelProperty()
  @IsString()
  @Expose({ groups: ["write"] })
  readonly name: string;

 
}
const user1 = classToClass(CommonFieldDto, { groups: ["read"] });
console.log("user1",user1);
export class RoleCreateDto extends user1{
  @ApiModelProperty()
  @IsString()
  @Expose({ groups: ["write"] })
  readonly name: string;

}

export class RoleRespDto extends user1{
  @ApiModelProperty()
  @IsInt()
  @Exclude()
  readonly id: number;
}

