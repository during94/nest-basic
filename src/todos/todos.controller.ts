import { Controller, Get, Param } from '@nestjs/common';

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
}
