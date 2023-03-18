import { Controller,Get,Param } from '@nestjs/common';
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
    getUser(@Param('id') id: string) {
        return this.githubService.findOne(id);
        
    }
}
