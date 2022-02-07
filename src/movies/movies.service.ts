import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/movie.dto';
import { Movie } from './interfaces/movie';

@Injectable()
export class MoviesService {
  constructor(@InjectModel('movies-rating') private moviesModel: Model<Movie>) {}

  async getMovies(): Promise<Movie[]> {
    const movies = await this.moviesModel.find();
    return movies;
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new this.moviesModel(createMovieDto);
    await movie.save();
    return movie;
  }
}
