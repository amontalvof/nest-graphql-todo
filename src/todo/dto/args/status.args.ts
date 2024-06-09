import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {
    @Field(() => Boolean, {
        description: 'Filter todos by status.',
        nullable: true,
    })
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
