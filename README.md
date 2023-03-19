# A NestJS Based Backend to show Github Users Activity

## Running the project
cd into the github-activity directory and enter the following command to start the server

```
npm run start:dev


```

### APIs
The application consists of two APIs:
1. [ListUsers](https://localhost:3000/githubactivity)
2. [UserDetail](https://http://localhost:3000/githubactivity/28946)

For getting the list of users,the following API is used:
https://localhost:3000/githubactivity

For getting a specific User detail, the following API is used:

https://http://localhost:3000/githubactivity/<id>


The Concepts have been implemented:

1. Controller - Used for Handling the incoming requests and returning response
2. Service - Used for defining the Business Logic
3. Repository - Used for interacting with the Backend.
4. Backend - No database is used for now. The data is stored in a JSON format in a file named as users.json
5. For handling dependencies, Dependency Injection has been used.
6. Exception Handling.
