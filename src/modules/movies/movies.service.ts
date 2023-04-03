import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom } from 'rxjs';
import 'dotenv/config';

@Injectable()
export class MoviesService {
  private apiUrlMovie: string = process.env.API_URL_MOVIE;
  private apikeyMovie: string = process.env.API_KEY_MOVIE;
  constructor(private readonly httpService: HttpService) {}

  async searchExample(): Promise<any> {
    const url = `${this.apiUrlMovie}movie/550?api_key=${this.apikeyMovie}`;
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async search(lang: string, query: string): Promise<any> {
    const url =
      `${this.apiUrlMovie}search/movie` +
      `?api_key=${this.apikeyMovie}&language=${lang}&query=${query}&page=1&include_adult=false`;
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
  async findById(movieId: number, lang: string): Promise<any> {
    const url =
      `${this.apiUrlMovie}movie/${movieId}` +
      `?api_key=${this.apikeyMovie}&language=${lang}`;
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
  async findAllPopular(lang: string): Promise<any> {
    const url =
      `${this.apiUrlMovie}movie/popular` +
      `?api_key=${this.apikeyMovie}&language=${lang}`;
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
  // async findAllListFavorite(): Promise<any> {}
  // async findAllFavorite(): Promise<any> {}
  // async createFavorite(): Promise<any> {}
}
