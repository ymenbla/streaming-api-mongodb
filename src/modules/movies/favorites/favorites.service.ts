import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './schemas/favorite.schema';
import { MoviesService } from '../movies.service';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
    private readonly moviesServices: MoviesService,
  ) {}

  async findOne(userId: string, movieId: number): Promise<Favorite> {
    return this.favoriteModel.findOne({ userId, movieId }).exec();
  }

  async findAll(userId: string): Promise<Favorite[]> {
    return this.favoriteModel.find({ userId }).exec();
  }

  async create(userId: string, movieId: number): Promise<Favorite> {
    const isCrated = await this.findOne(userId, movieId);
    if (isCrated) {
      throw `The movie id: ${movieId} is created!`;
    }
    const movieDetail = await this.moviesServices.findById(movieId, '');
    return this.favoriteModel.create({ userId, movieId, movieDetail });
  }

  // async update(id: string, updateFavoriteDto: FavoriteDto): Promise<Favorite> {
  //   return this.favoriteModel.findOneAndUpdate({ _id: id }, updateFavoriteDto, {
  //     new: true,
  //   });
  // }

  async delete(userId: string, movieId: number): Promise<any> {
    const isCrated = await this.findOne(userId, movieId);
    if (!isCrated) {
      throw `The movie id: ${movieId} cannot be deleted!`;
    }
    return this.favoriteModel.findOneAndDelete({ _id: isCrated['_id'] });
  }
}
