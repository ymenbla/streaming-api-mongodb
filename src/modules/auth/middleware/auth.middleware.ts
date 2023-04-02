import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization) {
      const decode = this.jwtService.decode(
        req.headers.authorization.split(' ')[1],
      );
      req['user'] = await this.usersService.findOne(decode['id']);
    }

    next();
  }
}
