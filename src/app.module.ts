import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), AuthModule, UsersModule],
  controllers: [AppController, JobsController],
  providers: [AppService],
})
export class AppModule {}
