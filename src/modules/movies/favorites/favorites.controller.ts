import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesServices: FavoritesService) {}
  // @Get('user/:userId/findOne/:')
  // async findOne(@Param('userId') userId: string, @Param('userId')) {
  //   return this.favoritesServices.findOne(id);
  // }
  @Get(':userId/findAll')
  async findAll(@Param('userId') userId: string) {
    return this.favoritesServices.findAll(userId);
  }
  @Post(':userId/addOne/:movieId')
  async addOne(
    @Param('userId') userId: string,
    @Param('movieId') movieId: number,
  ) {
    return this.favoritesServices.create(userId, movieId);
  }
  @Delete(':userId/deleteOne/:movieId')
  async deleteOne(
    @Param('userId') userId: string,
    @Param('movieId') movieId: number,
  ) {
    return this.favoritesServices.delete(userId, movieId);
  }
}
