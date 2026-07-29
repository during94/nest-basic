import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const requestedApiKey = request.header('x-api-key');

    const configureApiKey = this.configService.getOrThrow<string>('API_KEY');

    if (requestedApiKey !== configureApiKey) {
      throw new UnauthorizedException('올바른 API 키가 필요합니다.');
    }

    return true;
  }
}
