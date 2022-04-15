# 🚀 [APIHub](https://api-hub-dev.vercel.app/)
![](https://img.shields.io/badge/license-MIT-green) ![](https://shields.io/badge/website-up-brightgreen)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) 
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

<br/>

# ✨ About
* A Hub of APIs where users can display their APIs and share it with others to use it and create a nice website on top of their APIs.
* A Playground is created for users to test an api by passing headers, body , and query paramters along with the api url.
* Project also contains a Background Remover application to remove background of an image(uses remove.bg api).
* Background Remover application is presented as an example for other users to create an web app by taking inspiration from apis present on the explore page.

### Live Website - <b>[APIHub](https://api-hub-dev.vercel.app/)</b>

### YouTube Video - <b>[YT](https://youtu.be/usncU7HzBPo)</b>

<br/>

# ✨ Folder Structure

```
backend
    src
        middlewares -> contains the middleware functions
        models -> contains the models/schemas
        routes -> contains the apis
        startup -> contains startup files
        utils -> contains utility functions
```

<br/>

# ✨ Usage

## Prerequisites
* Git
* Node & npm
* MongoDB

<br/>

## Clone the repository
```
$ git clone https://github.com/jainaayush01/apihub/ 
```

<br/>

## Server Side (PORT: 8001)

1. Open another terminal and run following commands:
    ```
    $ cd backend
    $ npm install
    ```

2. Copy & rename ``` .env.example ``` to ``` .env``` 

3. Add following environment variables:
    ```
    MONGODB_URI=
    PORT=
    JWT_SECRET= // random string
    BGREMOVER_API_KEY= // go to remover.bg and get your api key
    ```

4. start and you are ready to go
    ```
    $ npm run dev
    ```
<br/>

# Creator/Author 

<b>Aayush Jain</b>

[![GitHub jainaayush01](https://img.shields.io/github/followers/jainaayush01?label=follow&style=social)](https://github.com/jainaayush01)
[![Linkedin: Aayush Jain](https://img.shields.io/badge/-Aayush%20Jain-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jainaayush01/)](https://www.linkedin.com/in/jainaayush01/)
[![Twitter: Aayush Jain](https://img.shields.io/twitter/follow/jainaayush01?style=social)](https://twitter.com/jainaayush01)