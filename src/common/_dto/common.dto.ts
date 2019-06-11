import { ApiModelProperty } from "@nestjs/swagger";
import { IsDate, IsBoolean } from "class-validator";

export class CommonFieldDto {
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