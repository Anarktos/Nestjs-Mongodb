import { Schema } from 'mongoose';

export const moviesSchema = new Schema({
  title: String,
  director: String,
  genre: String,
  rating: Number,
  releaseYear: Number,
});


