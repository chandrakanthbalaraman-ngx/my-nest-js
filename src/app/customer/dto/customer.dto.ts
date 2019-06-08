import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

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

export class CustomerRespDto extends CustomerDto {
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
