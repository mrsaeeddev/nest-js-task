import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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
}

