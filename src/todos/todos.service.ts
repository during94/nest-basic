import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`${id}번 Todo를 찾을 수 없습니다.`);
    }

    return todo;
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

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);

    Object.assign(todo, updateTodoDto);

    return todo;
  }

  remove(id: string): void {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new NotFoundException(`${id}번 Todo를 찾을 수 없습니다.`);
    }

    this.todos.splice(index, 1);
  }
}
