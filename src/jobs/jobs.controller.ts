import { Controller, Get } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
