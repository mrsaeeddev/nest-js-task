import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    title: string;

    @Column({length: 50})
    companyName: string;

    @Column({length: 300})
    description: string;

    @Column()
    status: number;

    @Column()
    locationCoords: number;
}

