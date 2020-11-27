import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './jobs.entity';
import { JobRepository } from './jobs.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobRepository])],
  controllers: [JobsController],
})
export class JobsModule {}