import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  createUser(dto: CreateUserDto) {
    return this.usersRepo.create(dto);
  }

  findByUsername(username: string) {
    return this.usersRepo.findByUsername(username);
  }
}
