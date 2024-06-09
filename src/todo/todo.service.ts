import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Injectable()
export class TodoService {
    private readonly todos: Todo[] = [
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

    create(todoInput: CreateTodoInput): Todo {
        const newTodo = new Todo();
        newTodo.description = todoInput.description;
        newTodo.done = false;
        newTodo.id = Math.max(...this.todos.map((item) => item.id), 0) + 1;
        this.todos.push(newTodo);
        return newTodo;
    }

    readAll(): Todo[] {
        return this.todos;
    }

    readOne(id: number): Todo {
        const todo = this.todos.find((item) => item.id === id);
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return todo;
    }

    update(todoInput: UpdateTodoInput): Todo {
        const { id, description, done } = todoInput;
        const todo = this.readOne(id);
        if (description) {
            todo.description = description;
        }
        if (done !== undefined) {
            todo.done = done;
        }
        return todo;
    }
}
