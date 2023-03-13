import { Test, TestingModule } from '@nestjs/testing';
import { GithubactivityController } from './githubactivity.controller';

describe('GithubactivityController', () => {
  let controller: GithubactivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubactivityController],
    }).compile();

    controller = module.get<GithubactivityController>(GithubactivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
