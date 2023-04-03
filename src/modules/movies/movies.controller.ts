import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { QryFindAllMovie, QrySearchMovie } from '../../helpers/movies.helper';

// @UseGuards(AuthGuard)
@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServices: MoviesService) {}
  @Get('search/example')
  async searchExample() {
    return this.moviesServices.searchExample();
  }

  @Get('search/:language/:filter')
  async serach(
    @Param('filter') filter: string,
    @Param('language') language: string,
  ) {
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
