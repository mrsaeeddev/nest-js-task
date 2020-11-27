import { Job } from './jobs.entity';
import { EntityRepository, Repository } from 'typeorm';
import { JobDto } from './jobs.dto';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
  createDog = async (jobDto: JobDto) => {
    return await this.save(jobDto);
  };
}