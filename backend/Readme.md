# Starter Template for Rest API Projects

## Directory Structure

```
src
    middlewares
        Middle Ware related code goes here, for example authentication, authrization middleware
    models
        Mongoose Entity models and schema definitions go here 
    routes
        API routes related code belongs here
    utils
        All the utilities and related code goes here
    index.js -> use this file to define the server and express app
```

## How to run

### Running API server locally

```bash
npm run dev
```

### Creating new models

If you need to add more models to the project just create a new file in `/src/models/`.

### Creating new routes

If you need to add more routes to the project just create a new file in `/src/routes/`.

### Creating new middlewares

If you need to add more middlewares to the project just create a new file in `/src/middlewares/` and use them in the routes.
