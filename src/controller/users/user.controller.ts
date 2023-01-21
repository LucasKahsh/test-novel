import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { UserNotFound } from 'src/exceptions';
import { UsersService } from 'src/services/users/user.service';
import { ReturnUserDto, UserPostDto, UserPutDto } from './users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({
    description: 'Create user.',
  })
  @ApiResponse({
    status: 201,
    type: ReturnUserDto,
    description: 'Return Post User.',
  })
  @Post()
  async create(@Body() user: UserPostDto) {
    try {
      const newUser = await this.usersService.save(user);
      return newUser;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @ApiOperation({
    description: 'Get all users from the DB.',
  })
  @ApiResponse({
    status: 200,
    type: [ReturnUserDto],
    description: 'Return get users.',
  })
  @Get()
  async findAll() {
    const users: Array<User> = await this.usersService.findAll();
    return users;
  }

  @ApiOperation({
    description: 'Get one user from the DB.',
  })
  @ApiResponse({
    status: 200,
    type: ReturnUserDto,
    description: 'Return get user.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the user to be search.',
    required: true,
  })
  @Get('/:id')
  async findOneById(@Param('id') id: string) {
    return await this.usersService.findOneById(id);
  }

  @ApiOperation({
    description: 'Update user.',
  })
  @ApiResponse({
    status: 200,
    type: ReturnUserDto,
    description: 'Return Updated User.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the user to be updated.',
    required: true,
  })
  @Put('/:id')
  async update(@Param('id') id: string, @Body() dto: UserPutDto) {
    try {
      await this.usersService.update(id, dto);
      return await this.usersService.findOneById(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @ApiOperation({
    description: 'Delete one user from the DB.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the user to be deleted.',
    required: true,
  })
  @Delete('/:id')
  async remove(@Param('id') id: string) {
    if ((await this.usersService.delete(id)) != 0) {
      return { success: true, message: 'User deleted.' };
    }
    throw new UserNotFound();
  }
}
