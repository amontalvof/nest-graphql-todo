import { Field, InputType } from '@nestjs/graphql';
import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
    @Field(() => Number, {
        description: 'The ID of the todo to update.',
    })
    @IsInt()
    @Min(1)
    id: number;

    @Field(() => String, {
        description: 'What needs to be done.',
        nullable: true,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    @IsOptional()
    description?: string;

    @Field(() => Boolean, {
        description: 'Is the task done?',
        nullable: true,
    })
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}
