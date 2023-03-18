import { readFile } from "fs/promises";

export class GithubActivityRepository {
    async findOne(id: string) {
        const contents = await readFile('users.json', 'utf8');
        const githubactivity = JSON.parse(contents);
        
        for (let i = 0; i < githubactivity.length; i++){
            if (githubactivity[i]["id"] == id) {
                return githubactivity[i];
            }
        }
    }

    async findAll() {
        const contents = await readFile('users.json', 'utf8');
        const githubactivity = JSON.parse(contents);

        return githubactivity
    }
}