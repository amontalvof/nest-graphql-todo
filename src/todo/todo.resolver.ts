import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';
import { Aggregations } from './types/aggregations.type';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Mutation(() => Todo, { name: 'createTodo' })
    create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
        return this.todoService.create(createTodoInput);
    }

    @Query(() => [Todo], { name: 'todos' })
    readAll(@Args() statusArgs: StatusArgs): Todo[] {
        return this.todoService.readAll(statusArgs);
    }

    @Query(() => Todo, { name: 'todo' })
    readOne(@Args('id', { type: () => Int }) id: number) {
        return this.todoService.readOne(id);
    }

    @Mutation(() => Todo, { name: 'updateTodo' })
    update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
        return this.todoService.update(updateTodoInput);
    }

    @Mutation(() => Todo, { name: 'deleteTodo' })
    delete(@Args('id', { type: () => Int }) id: number) {
        return this.todoService.delete(id);
    }

    @Query(() => Int, { name: 'totalTodosAmount' })
    totalTodos() {
        return this.todoService.totalTodos;
    }

    @Query(() => Int, { name: 'completedTodosAmount' })
    completedTodos() {
        return this.todoService.completedTodos;
    }

    @Query(() => Int, { name: 'pendingTodosAmount' })
    pendingTodos() {
        return this.todoService.pendingTodos;
    }

    @Query(() => Aggregations, { name: 'aggregations' })
    aggregations(): Aggregations {
        return {
            total: this.todoService.totalTodos,
            totalAggregatedTodos: this.todoService.totalTodos,
            completedAggregatedTodos: this.todoService.completedTodos,
            pendingAggregatedTodos: this.todoService.pendingTodos,
        };
    }
}
