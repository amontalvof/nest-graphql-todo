import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
    @Query(() => [Todo], { name: 'todos' })
    findAllTodos(): Todo[] {
        return [
            {
                id: 1,
                description: 'Buy milk',
                done: false,
            },
            {
                id: 2,
                description: 'Clean the house',
                done: true,
            },
        ];
    }

    findOneTodo() {}

    createTodo() {}

    updateTodo() {}

    removeTodo() {}
}
