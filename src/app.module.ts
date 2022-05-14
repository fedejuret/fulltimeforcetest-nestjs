import { Module } from '@nestjs/common';
import { CommitController } from './commit.controller';
import { CommitsService } from './commits.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CommitController],
  providers: [CommitsService],
})
export class AppModule {}
