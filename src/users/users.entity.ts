import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from 'typeorm';
import {hash, compare} from 'bcrypt'
import { Job } from '../jobs/jobs.entity'
@Entity("users")
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length: 50, nullable: true})
    username: string;

    @Column({type:'varchar', length: 50})
    password: string;

    @Column({type:'varchar', length: 50, unique: true})
    email: string;

    @OneToMany(()=>Job,job=>job.user)
    job:Promise<Job[]>

    @BeforeInsert()
    async hashPassword() {
      this.password = await hash(this.password, 10);
    }
  
    async comparePassword(attempt: string): Promise<boolean> {
      return await compare(attempt, this.password);
    }
}

