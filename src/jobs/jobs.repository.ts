import { Job } from './jobs.entity';
import { EntityRepository, Repository } from 'typeorm';
import { JobDto } from './jobs.dto';

interface body {
  [key: string]: any  
}
@EntityRepository(Job)
export class JobRepository extends Repository<Job> {

  createDog = async (jobDto: JobDto) => {
    return await this.save(jobDto);
  };

  applyJob = async (id: string, body: body) => {
    let job = await this.findOne(id);
    if (job) {
      job.user = body.userId
      this.save(job)
    }
    return job
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