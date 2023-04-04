import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../users/user.schema';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Req() req: Request, @Body() loginDto: LoginDto) {
    const user = loginDto as User;
    return await this.authService.generateToken(user);
  }
}
