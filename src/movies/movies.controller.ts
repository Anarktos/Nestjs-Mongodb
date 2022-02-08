import { Body, Controller, Delete, Get, HttpStatus, Post, Query, Res, UseGuards } from '@nestjs/common';
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

  @Get('/search')
  async findByTitle(@Res() res, @Query('title') title) {
    const movie = await this.moviesService.findByTitle(title);
    return res.status(HttpStatus.OK).json({ movie });
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createMovie(@Res() res, @Body() createMovieDto: CreateMovieDto) {
    const movie = await this.moviesService.createMovie(createMovieDto);
    return res.status(HttpStatus.OK).json({ message: 'created', movie });
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  async editMovie(@Res() res, @Query('id') id, @Body() createMovieDto: CreateMovieDto) {
    const movie = await this.moviesService.editMovie(id, createMovieDto);
    return res.status(HttpStatus.OK).json({ movie });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async delente(@Res() res, @Query('id') id) {
    const movie = await this.moviesService.delete(id);
    return res.status(HttpStatus.OK).json({ movie });
  }
}
