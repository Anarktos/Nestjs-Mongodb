import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(@Res() res) {
    const users = await this.usersService.getUsers();
    return res.status(HttpStatus.OK).json({ users });
  }
}
