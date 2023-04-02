import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.usersServices.findOne(id);
  }
  @Get('findAll')
  async findAll() {
    return this.usersServices.findAll();
  }
  @Post('createOne')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersServices.create(createUserDto);
  }
  @Put('updateOne/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersServices.update(id, updateUserDto);
  }
}
