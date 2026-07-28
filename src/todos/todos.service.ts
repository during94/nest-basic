import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import type { Todo } from './todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];
  private nextId = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findCompleted(): Todo[] {
    return this.todos.filter((todo) => todo.completed);
  }

  findOne(id: string): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: String(this.nextId++),
      title: createTodoDto.title,
      completed: false,
    };

    this.todos.push(todo);

    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo | undefined {
    const todo = this.findOne(id);

    if (!todo) {
      return undefined;
    }

    Object.assign(todo, updateTodoDto);

    return todo;
  }

  remove(id: string): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return false;
    }

    this.todos.splice(index, 1);

    return true;
  }
}
