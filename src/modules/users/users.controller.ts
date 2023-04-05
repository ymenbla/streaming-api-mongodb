import { BadRequestException, Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.usersServices.findOne(id);
  }
  // @Get('findAll')
  // async findAll() {
  //   return this.usersServices.findAll();
  // }
  @Post('createOne')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersServices.create(createUserDto);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Put('updateOne/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersServices.update(id, updateUserDto);
  }
}
