import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}

export class RoleRespDto extends RoleDto {
  @ApiModelProperty()
  @IsDate()
  readonly created_date: Date;

  @ApiModelProperty()
  @IsDate()
  readonly updated_date: Date;

  @ApiModelProperty()
  @IsBoolean()
  readonly isActive: boolean;
}
