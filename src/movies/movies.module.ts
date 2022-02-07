import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { moviesSchema } from './schemas/movies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'movies-rating',
        schema: moviesSchema,
      },
    ]),
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
