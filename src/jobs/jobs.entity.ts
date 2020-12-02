import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Users, user => user.job, { cascade: ['insert', 'update'] ,eager: true })
    user:Promise<Users[]>

    @Column({length: 50, nullable: true})
    title: string;

    @Column({length: 50, unique: true})
    companyName: string;

    @Column({length: 300})
    description: string;

    @Column()
    status: number;

    @Column()
    locationCoords: number;
}

