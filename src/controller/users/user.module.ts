import { Module } from '@nestjs/common';
import { UsersServiceModule } from 'src/services/users/user.module';
import { UsersController } from './user.controller';

@Module({
  imports: [UsersServiceModule],
  controllers: [UsersController],
})
export class UsersModule {}
