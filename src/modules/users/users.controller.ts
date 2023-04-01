import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersServices.findOne(id);
  }
  @Get()
  async findAll() {
    return this.usersServices.findAll();
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersServices.create(createUserDto);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersServices.update(id, updateUserDto);
  }
}
