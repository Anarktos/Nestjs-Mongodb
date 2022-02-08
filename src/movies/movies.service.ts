import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async findByTitle(title: string): Promise<Movie> {
    const movie = await this.moviesModel.findOne({ title });
    if (!movie) throw new NotFoundException();
    return movie;
  }

  async editMovie(id: string, createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = await this.moviesModel.findByIdAndUpdate(id, createMovieDto);
    if (!movie) throw new NotFoundException();
    return movie;
  }

  async delete(id: string): Promise<Movie> {
    const movie = await this.moviesModel.findByIdAndDelete(id);
    if (!movie) throw new BadRequestException({ message: 'cannot find movie' });
    return movie;
  }
}
