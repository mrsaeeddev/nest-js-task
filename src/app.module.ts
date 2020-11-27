import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), AuthModule, UsersModule, JobsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
