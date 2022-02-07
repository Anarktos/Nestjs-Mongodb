import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});
