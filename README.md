# blend-backend

This is a [Node.js](https://nodejs.org/en/) backend service layer built with [Typescript](https://www.typescriptlang.org/)

The layer is already hooked up to a [Heroku instance](https://blend-backend.herokuapp.com/)

## Getting Started

You can run the environment locally with

```zsh
npm run dev
```

After starting the environment, you can navigate to http://localhost:PORT and interact with the service's different endpoints

You can visit the [Heroku instance](https://blend-backend.herokuapp.com/) to ping the production environment

## Deploying to Heroku

Once you have access to deploy to heroku, you will be able to deploy changes to Service with 

```zsh
git push heroku
```

after you have comitted code.  Code pushed to Service/Heroku should also be pushed to Github via a feature branch.

## Dealing with MongoDB

Once you have access to the Atlas cluster [here](https://cloud.mongodb.com/v2/6202b7617cfa5f6d4bc6e701#clusters), you will be able to monitor throughput and data limitations on the data cluster.

Details on how to connect MongoDB to your Node.js service can be found [here](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database).  Your MongoDB URI can be found in the cluster page under Connect