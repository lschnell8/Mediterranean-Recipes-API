# Mediterranean-Recipes-API

- [UI Repo](https://github.com/lschnell8/Food-For-Thought)
- [Project Specifications](https://frontend.turing.edu/projects/module-3/showcase.html)

## Background

This server was written in JavaScript using Express and Node with intent for accompaniment to its UI counterpart "Food For Thought". It consists of a hand-rolled array of recipe objects that contain a name, image, ingredients, and instructions.

## Installation Instructions

1. Clone down this repo to your local machine:
    - `git@github.com:lschnell8/Mediterranean-Recipes-API.git`
2. Change directory:
    - `cd Mediterranean-Recipes-API`
3. Install the dependencies:
    - `npm install`
4. Starting the server, run command:
    - `node server.js` or `nodemon server.js`(if you have nodemon installed)
5. In the browser or postman, use the following endpoints with the base URL: http://localhost:3001/ to request data. 

## Endpoints

| Description | URL         | Method      | Required Properties for Request | Sample Sucessful Response |
| ----------- | ----------- | ----------- | ------------------------------- | ------------------------- |
| Get All Recipes | `http://localhost:3001/api/v1/recipes`| GET | none | array of recipe objects |    


## Technologies Used

- Express
- JavaScript
- Node
- Postman

## Authors

- [Lindsay Schnell](https://github.com/lschnell8)
