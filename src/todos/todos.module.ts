import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { LoggerMiddleware } from 'src/common/logger/logger.middleware';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Module({
  controllers: [TodosController],
  providers: [TodosService, ApiKeyGuard],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(TodosController);
  }
}
