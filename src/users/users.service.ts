import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async create(user: any): Promise<User | undefined> {
 
    let users = await this.userRepository.createUser(user);
    return users
  }

  async findOne(username: string): Promise<User | undefined> {
    let users = await this.userRepository.find();
    return users.find(user => user.username === username);
  }
}


