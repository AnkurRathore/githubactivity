import { Module } from '@nestjs/common';
import { GithubactivityController } from './githubactivity.controller';
import { GithubActivityService } from './githubactivityservice';
import { GithubActivityRepository } from './githubactivityrepository';


@Module({
  controllers: [GithubactivityController],
  providers:[GithubActivityService,GithubActivityRepository],
})
export class GithubactivityModule {}
