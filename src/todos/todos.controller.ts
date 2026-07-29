import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import type { Todo } from './todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Controller('todos')
// 전체 API에 적용 시 해당 클래스에 작성, 개별 적용은 각 메서드에 작성
// @UseGuards(ApiKeyGuard)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get('completed')
  findCompleted(): Todo[] {
    return this.todosService.findCompleted();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Todo {
    return this.todosService.findOne(id);
  }

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  @UseGuards(ApiKeyGuard)
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Todo {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.todosService.remove(id);
  }
}
