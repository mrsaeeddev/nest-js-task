import { Users } from './users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './users.dto';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  createUser = async (userDto: UserDto) => {
    return await this.save(userDto);
  };

  findOneUser = async (username: string) => {
    return this.findOneOrFail(username);
  };
}