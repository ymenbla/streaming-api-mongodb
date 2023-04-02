import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.schema';
import { PayloadToken } from 'src/helpers/auth.helper';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async generateToken(user: User): Promise<any> {
    const findUser = await this.usersService.findByEmail(user.email);

    const payload: PayloadToken = { id: findUser['id'], name: findUser.name };
    // const payload: PayloadToken = { id: findUser._id, name: findUser.name };
    const token = this.jwtService.sign(payload);
    return { ...payload, token };
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { ...respuesta } = user;
        return respuesta;
      }
    }
    return null;
  }
}
