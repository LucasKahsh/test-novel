import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(
    statusCode: number,
    status: string,
    message: string,
    errorCode: number = undefined,
    error: string = undefined,
  ) {
    super({ statusCode, status, message, errorCode, error }, statusCode);
  }
}

export class UserNotFound extends BaseException {
  constructor() {
    super(400, 'Bad Request', 'User not found.', 100);
  }
}
