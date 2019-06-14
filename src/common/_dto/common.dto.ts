import { ApiModelProperty } from "@nestjs/swagger";
import { IsDate, IsBoolean } from "class-validator";
import {Exclude, Expose} from "class-transformer";


export class CommonFieldDto {
    @ApiModelProperty()
    @IsDate()
    @Expose({ groups: ["read"] })
    readonly created_date: Date;

    @ApiModelProperty()
    @IsDate()
    @Expose({ groups: ["read"] })
    readonly updated_date: Date;

    @ApiModelProperty()
    @IsBoolean()
    @Expose({ groups: ["read"] })
    readonly isActive: boolean;
}