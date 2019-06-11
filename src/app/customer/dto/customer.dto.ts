import { IsString, IsInt, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { RoleRespDto } from '@app/role/dto/role.dto';
import { CommonFieldDto } from '@common/_dto/common.dto';

export class CustomerDto {
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


}

export class CustomerCreateDto extends CustomerDto {
  @ApiModelProperty()
  readonly role_id: number;
}
export class CustomerRespDto extends CustomerDto {
  @ApiModelProperty()
  readonly role: RoleRespDto;

}

