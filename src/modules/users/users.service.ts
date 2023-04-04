import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const emailExists = await this.findByEmail(createUserDto.email);
    if (emailExists) {
      throw new BadRequestException(`The Email ${emailExists} already exists`);
    }
    if (createUserDto.password) {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    }
    return this.userModel.create(createUserDto);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true,
    });
  }
}
