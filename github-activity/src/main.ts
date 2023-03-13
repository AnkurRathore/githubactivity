import { NestFactory } from '@nestjs/core';
import { GithubactivityModule } from './githubactivity/githubactivity.module';

async function bootstrap() {
  const app = await NestFactory.create(GithubactivityModule);
  await app.listen(3000);
}
bootstrap();
