import { Controller,Get } from '@nestjs/common';

@Controller('githubactivity')
export class GithubactivityController {
    
    @Get()
    listUsers() {
        
    }

    @Get('/:id')
    getUser() {
        
    }
}
