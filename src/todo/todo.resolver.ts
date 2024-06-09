import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Resolver()
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Mutation(() => Todo, { name: 'createTodo' })
    create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
        return this.todoService.create(createTodoInput);
    }

    @Query(() => [Todo], { name: 'todos' })
    readAll(): Todo[] {
        return this.todoService.readAll();
    }

    @Query(() => Todo, { name: 'todo' })
    readOne(@Args('id', { type: () => Int }) id: number) {
        return this.todoService.readOne(id);
    }

    @Mutation(() => Todo, { name: 'updateTodo' })
    update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
        return this.todoService.update(updateTodoInput);
    }

    delete() {}
}
