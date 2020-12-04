import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users/users.repository';
import { Public } from './auth/public.decor';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {

   
  constructor(private authService: AuthService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Public()
  @Post('/auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }
  
}
