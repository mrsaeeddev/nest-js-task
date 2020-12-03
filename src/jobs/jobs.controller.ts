import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRepository } from './jobs.repository';
import { JobDto } from './jobs.dto';

@Controller('jobs')
export class JobsController {
  constructor(
    @InjectRepository(JobRepository) private readonly jobRepository: JobRepository,
  ) {}

  @Get()
  findAll() {
    return this.jobRepository.find();
  }

  @Post()
  create(@Body() jobDto: JobDto) {
      return this.jobRepository.createDog(jobDto)
  }

  @Get('/filter/data')
  async findByFilter(@Query() query) {
    return this.jobRepository.find(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobRepository.findOneJob(id);
  }

  @Post(':id/apply')
  apply(@Param('id') id: string,@Body()  body: object[]) {
    return this.jobRepository.applyJob(id, body)
  }  

  @Post('/nearby')
  nearby(@Body()  body: object[]) {
    return this.jobRepository.findNearby(body)
  }  

  @Put(':id')
  update(@Param('id') id: string, @Body() dogDto: JobDto) {
    return this.jobRepository.updateJob(id, dogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobRepository.removeJob(id);
  }
}