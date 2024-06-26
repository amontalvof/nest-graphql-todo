import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
    @Field(() => String, { description: 'What needs to be done.' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    description: string;
}
