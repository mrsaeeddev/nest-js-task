import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { JobDto } from './jobs.dto';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(): string {
    return 'This action returns all jobs';
  }

  @Post()
  create(@Body() jobDto: JobDto) {
      return jobDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
      return `we get the dog with the id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
      return `we update the dog with the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      return `we delete the dog with the id ${id}`;
  }
}