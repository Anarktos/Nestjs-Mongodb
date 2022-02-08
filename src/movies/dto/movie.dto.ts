import { IsNumber, IsString, Length, Max, Min } from "class-validator";


export class CreateMovieDto {
  @IsString()
  @Length(3, 30)
  title: string;

  @IsString()
  @Length(3, 25)
  director: string;

  @IsString()
  @Length(3, 20)
  genre: string;

  @IsNumber()
  @Min(1)
  @Max(10)
  rating: number;

  @IsNumber()
  @Min(1900)
  @Max(2023)
  releaseYear: number;
}
