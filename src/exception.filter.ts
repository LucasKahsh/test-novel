import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { BaseException } from './exceptions';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status;
    let json;

    if (
      exception instanceof BaseException ||
      exception instanceof HttpException
    ) {
      status = exception.getStatus();
      json = exception.getResponse();
    } else {
      Logger.error(exception);
      status = 500;
      json = {
        statusCode: 500,
        status: 'Internal Server Error',
        message:
          'An unexpected internal error occurred. Try again or contact support if the error persists.',
      };
    }

    response.status(status).json(json);
  }
}
