import { Job } from './jobs.entity';
import { EntityRepository, Repository } from 'typeorm';
import { JobDto } from './jobs.dto';
import { getDistance } from './jobs.helpers'

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

  findNearby = async (body: body) => {
    let nearbyjobs =  await this.find()
    let newjobs = nearbyjobs.map(job=> ({ ...job,     distance : getDistance(job.lat, job.long, body.lat, body.long)  }))
    newjobs.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    newjobs = newjobs.filter(item => parseInt(item.distance) < 1200 );
    return newjobs
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