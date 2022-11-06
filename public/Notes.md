1. No page refresh. All real time
2. Incoming and outgoing bacground is different

STACKS USED:

1. web socket
2. socket.io
3. HTML
4. CSS
5. JS
6.

# STEPS:

## create npm project

```
npm init -y

```

- this will create package.json file

## Create html, css and js files inside public folder

- style.css for css
- client.js for js
- index.html for html

## Install libraries and dependencies for the project:

- Install express : for handling the server side routing

```
npm install express
```

- Install nodemon: with the help of nodemon, everytime we make any changes to server.js we don't have to restart the server

```
npm install nodemon
```

- install nodemon for dev dependencies

```
npm install nodemon -D
```

- add under the scripts in pacakage.json file

```
  "scripts": {
    "dev": "nodemon server"
  },
```

## CREATE EXPRESS SERVER:

- To start server run:

```
npm run dev
```

## INSTALL SOCKET.IO:

- helps in real-time chatting using web

```
npm install socket.io
```

## SETUP SOCKET.IO IN SERVER.JS

## ADD click message send logic in client.js
