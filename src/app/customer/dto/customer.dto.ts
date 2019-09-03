import { IsString, IsInt, IsDate, IsBoolean, IsNumber, ValidateNested } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { RoleRespDo } from '@app/role/dto/role.dto';
import { CommonFieldDto } from '@common/_dto/common.dto';

export class CustomerDo {
  @ApiModelProperty()
  @IsString()
  readonly customer_name: string;

  @ApiModelProperty()
  @IsString()
  readonly first_name: string;

  @ApiModelProperty()
  @IsString()
  readonly last_name: string;

  @ApiModelProperty()
  @IsString()
  readonly phone: string;

  @ApiModelProperty()
  @IsString()
  readonly address1: string;

  @ApiModelProperty()
  @IsString()
  readonly address2: string;

  @ApiModelProperty()
  @IsString()
  readonly city: string;

  @ApiModelProperty()
  @IsString()
  readonly state: string;

  @ApiModelProperty()
  @IsString()
  readonly postal_code: string;

  @ApiModelProperty()
  @IsString()
  readonly country: string;

  @ApiModelProperty()
  readonly role_id: number;
}

export class CustomerRespDo extends CommonFieldDto {
  @ApiModelProperty()
  @IsString()
  readonly customer_name: string;

  @ApiModelProperty()
  @IsString()
  readonly first_name: string;

  @ApiModelProperty()
  @IsString()
  readonly last_name: string;

  @ApiModelProperty()
  @IsString()
  readonly phone: string;

  @ApiModelProperty()
  @IsString()
  readonly address1: string;

  @ApiModelProperty()
  @IsString()
  readonly address2: string;

  @ApiModelProperty()
  @IsString()
  readonly city: string;

  @ApiModelProperty()
  @IsString()
  readonly state: string;

  @ApiModelProperty()
  @IsString()
  readonly postal_code: string;

  @ApiModelProperty()
  @IsString()
  readonly country: string;
  

  @ApiModelProperty()
  readonly role: RoleRespDo;
}

