import { Controller,Get,Param,NotFoundException } from '@nestjs/common';
import { GithubActivityService } from './githubactivityservice';
@Controller('githubactivity')
export class GithubactivityController {

    githubService: GithubActivityService

    constructor() {
        // Refactor this using DI
        this.githubService = new GithubActivityService()
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
