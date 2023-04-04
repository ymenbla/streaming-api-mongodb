import { Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesServices: FavoritesService) {}

  @Get('findAll')
  async findAll(@Req() req: Request) {
    const user = req['user'];
    return this.favoritesServices.findAll(user['id']);
  }
  @Post('addOne/:movieId')
  async addOne(@Req() req: Request, @Param('movieId') movieId: number) {
    const user = req['user'];
    console.log('user: ', user);
    return this.favoritesServices.create(user['id'], movieId);
  }
  @Delete('deleteOne/:movieId')
  async deleteOne(@Req() req: Request, @Param('movieId') movieId: number) {
    const user = req['user'];
    return this.favoritesServices.delete(user['id'], movieId);
  }
}
