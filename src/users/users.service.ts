import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encodePassword } from 'src/util/bcrypt';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './interfaces/user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private usersModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDTO): Promise<any> {
    const pass = await encodePassword(createUserDto.password);
    const user = new this.usersModel({
      username: createUserDto.username,
      email: createUserDto.email,
      password: pass,
    });
    await user.save();
    return { username: user.username, email: user.email };
  }

  async getUsers(): Promise<User[]> {
    const users = await this.usersModel.find();
    return users;
  }

  async findUser(username: string): Promise<User | undefined> {
    const user = await this.usersModel.findOne({ username: username });
    if (!user) throw new NotFoundException();
    return user;
  }
}
