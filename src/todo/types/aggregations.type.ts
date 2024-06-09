import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Aggregations of todos' })
export class Aggregations {
    @Field(() => Int, {
        deprecationReason:
            'This field is deprecated, use totalAggregatedTodos instead',
    })
    total: number;

    @Field(() => Int)
    totalAggregatedTodos: number;

    @Field(() => Int)
    completedAggregatedTodos: number;

    @Field(() => Int)
    pendingAggregatedTodos: number;
}
