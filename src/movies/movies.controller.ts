import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMovieDto } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async getMovies(@Res() res) {
    const movies = await this.moviesService.getMovies();
    return res.status(HttpStatus.OK).json({ movies });
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createMovie(@Res() res, @Body() createMovieDto: CreateMovieDto) {
    const movie = await this.moviesService.createMovie(createMovieDto);
    return res.status(HttpStatus.OK).json({ message: 'created', movie });
  }
}
