import { Job } from './jobs.entity';
import { EntityRepository, Repository } from 'typeorm';
import { JobDto } from './jobs.dto';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
  createDog = async (jobDto: JobDto) => {
    return await this.save(jobDto);
  };
  findOneJob = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateJob = async (id: string, jobDto: JobDto) => {
    return this.save({ ...jobDto, id: Number(id) });
  };

  removeJob = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}