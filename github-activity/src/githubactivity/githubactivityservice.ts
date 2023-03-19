import { Injectable } from "@nestjs/common";
import { GithubActivityRepository } from "./githubactivityrepository";



@Injectable()
export class GithubActivityService{

   

    constructor(public githubRepo: GithubActivityRepository) {
     
    }

    findOne(id: string) {
        return this.githubRepo.findOne(id);
    }

    findAll() {
        return this.githubRepo.findAll();
    }

}