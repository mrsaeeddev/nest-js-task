import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from './users.repository';
import { AppModule } from 'src/app.module';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users,UserRepository]),
    forwardRef(() => AuthModule),
  ],
  
  providers: [UsersService],
  exports: [UsersService],
})

export class UsersModule {}
