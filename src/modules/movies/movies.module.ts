import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { HttpModule } from '@nestjs/axios';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Favorite, FavoriteSchema } from './favorites/schemas/favorite.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: Favorite.name, schema: FavoriteSchema },
    ]),
  ],
  controllers: [MoviesController, FavoritesController],
  providers: [MoviesService, FavoritesService, JwtService],
})
export class MoviesModule {}
