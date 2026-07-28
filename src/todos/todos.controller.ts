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
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  @Get()
  findAll(): string {
    return 'Todo 목록';
  }

  @Get('completed')
  findCompleted(): string {
    return '완료 Todo 목록';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `${id}번 Todo`;
  }

  @Post()
  create(@Body() body: CreateTodoDto) {
    return {
      id: 1,
      title: body.title,
      completed: false,
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: { title?: string; completed?: boolean },
  ) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    console.log(`${id}번 todo 삭제`);
  }
}
