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

# ✨ Tech Stack:

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

### Frontend: <b>React, Sass, React Router</b>

### Backend: <b>Nodejs, Express, MongoDB</b>

### Deployment & Testing: <b>Vercel, Heroku, Postman</b>

<br/>

# ✨ Snapshots 💫💫

![](https://snipboard.io/M1a8dp.jpg)

![](https://snipboard.io/Ht9z6G.jpg)

![](https://snipboard.io/V9kuMi.jpg)

![](https://snipboard.io/PqnYd9.jpg)

![](https://snipboard.io/9CEoVy.jpg)

![](https://snipboard.io/UCSvgR.jpg)

![](https://snipboard.io/DKb1Gh.jpg)

![](https://snipboard.io/FO1A6I.jpg)

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

frontend
    src
        assets -> contains logos, images, etc.
        components -> react components
        pages -> contains the web pages
        utils -> utility functions

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

## Client Side (PORT: 3000)
1. Run following commands:
    ```
    $ cd frontend
    $ npm install
    ```

2. Copy & rename ``` .env.example ``` to ``` .env``` 

3. Add following environment variables:
    ```
    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_BACKEND_URL=http://localhost:8001
    ```

4. start and you are ready to go
    ```
    $ npm run start
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