import { Controller,Get,Param,NotFoundException } from '@nestjs/common';
import { GithubActivityService } from './githubactivityservice';

@Controller('githubactivity')
export class GithubactivityController {

    

    constructor(public githubService:GithubActivityService) {
        
    }
    
    @Get()
    listUsers() {
        return this.githubService.findAll();
    }

    @Get('/:id')
    async getUser(@Param('id') id: string) {
        const user = await this.githubService.findOne(id);

        if (!user) {
            throw new NotFoundException('user not found')
        }

        return user
        
        
    }
}
