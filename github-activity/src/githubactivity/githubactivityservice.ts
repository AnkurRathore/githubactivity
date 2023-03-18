import { GithubActivityRepository } from "./githubactivityrepository";




export class GithubActivityService{

    githubRepo: GithubActivityRepository;

    constructor() {
        // This service is creating it's own dependency
        // Can be refactored using DependenvyInjection
        this.githubRepo = new GithubActivityRepository();
    }

    findOne(id: string) {
        return this.githubRepo.findOne(id);
    }

    findAll() {
        return this.githubRepo.findAll();
    }

}