import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './jobs.entity';
import { JobRepository } from './jobs.repository';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobRepository])],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [JobsController],
})
export class JobsModule {}