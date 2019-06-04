# first-SPA
contains a SPA which has express for backend


The folder structure is as follows:

fisrt-SPA/client/src/pages

First-SPA contains a index.js file and a queries.js file which are for backend server, they use express and postgres database.
For more details on backend please check my repository that is exclusively for backend: https://github.com/aditya19970411/Backend-Task


We will use create-react-app for a basic app creation so:
install create-react-app via npm

npm install -g create-react-app

then create a react app using below coomand

create-react-app client

we have used routers so install react-router-dom:

npm install -g react-router-dom

In order for our React app to proxy API requests to the Express app we have created , we will need to make a change to client/package.json. This is done by adding the below line:

"proxy": "http://localhost:xxxx" (xxxx is the port number that you have configured your express to listen on)
