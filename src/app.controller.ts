import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/public.decor'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/auth/login')
  async login(@Request() req) {
    console.log(req.body,'Req')
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
