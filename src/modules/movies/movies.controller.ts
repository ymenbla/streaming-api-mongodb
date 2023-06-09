import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { QryFindAllMovie } from '../../helpers/movies.helper';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServices: MoviesService) {}

  @Get('search/:language/:filter')
  async serach(@Param('filter') filter: string, @Param('language') language: string) {
    return this.moviesServices.search(language, filter);
  }

  @Get('findById/:id')
  async findById(@Param('id') id: number, @Query() query: QryFindAllMovie) {
    const { language } = query;
    return this.moviesServices.findById(id, language);
  }

  @Get('popular')
  async findAllPopular(@Query() query: QryFindAllMovie) {
    const { language } = query;
    return this.moviesServices.findAllPopular(language);
  }
}
