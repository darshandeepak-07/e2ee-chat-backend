import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  create(dto: CreateUserDto) {
    return this.model.create(dto);
  }

  findByUsername(username: string) {
    return this.model.findOne({ username }).exec();
  }
}
