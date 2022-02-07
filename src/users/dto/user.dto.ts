import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @Length(3, 15)
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Length(8, 20)
  @IsString()
  password: string;
}
