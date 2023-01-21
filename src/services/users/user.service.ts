import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostDto } from 'src/controller/users/users.dto';
import { User } from 'src/entities/user.entity';
import { UserNotFound } from 'src/exceptions';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  save(user: UserPostDto) {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: string): Promise<User> {
    const user: User = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new UserNotFound();
    }
    return user;
  }

  async update(id: string, dto: any): Promise<any> {
    const user: User = await this.findOneById(id);
    return await this.userRepository
      .createQueryBuilder()
      .update()
      .set({
        name: dto.name ?? user.name,
        age: dto.age ?? user.age,
        email: dto.email ?? user.email,
        gender: dto.gender ?? user.gender,
        phone: dto.phone ?? user.phone,
        weight: dto.weight ?? user.weight,
        height: dto.height ?? user.height,
        cpf: dto.cpf ?? user.cpf,
        birthdate: dto.birthdate ?? user.birthdate,
      })
      .where('id = :id', { id })
      .execute();
  }

  async delete(id: string): Promise<any> {
    return (
      await this.userRepository
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('id = :id', { id })
        .execute()
    ).affected;
  }
}
