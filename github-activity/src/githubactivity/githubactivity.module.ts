import { Module } from '@nestjs/common';
import { GithubactivityController } from './githubactivity.controller';

@Module({
  controllers: [GithubactivityController]
})
export class GithubactivityModule {}
