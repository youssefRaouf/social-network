
import 'dotenv/config';
import "regenerator-runtime/runtime";
import bodyParser from 'body-parser';
import Router from './Router';
import express from 'express';
import socket from 'socket.io';
import http from 'http';
export let jwt = require('jsonwebtoken')
const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Range'
    );
    res.header(
        'Access-Control-Expose-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Range'
      );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });

  app.use((req, res, next) => {
    // TODO: add token check here
    // let jwt = require('jsonwebtoken')
    let token = req.header('token')
   if(token==='null'){
   console.log("hna")
   }
   else if(token){
    let object = jwt.verify(token, 'secret');
    req.userId = object.user.id;}
    else{
    req.userId =3;
    }
    next();
  });
  
const port = process.env.PORT || 4000
const router = new Router(app);

server.listen(port, () => console.log(`Social app listening on port ${port}!`))


const posts = io
  .of('/posts')
  .on('connection', function (socket) {
    
  });
  
  const commentsSocket = io
  .of('/posts/comments')
  .on('connection', (socket) => {
  });

  const chatSocket = io
  .of('/chat')
  .on('connection', (socket) => {
    console.log("ya rb asddddddddddddddddddddddddddddddddddddddd")
  });
  const reactionsSocket = io
  .of('/posts/reactions')
  .on('connection', (socket) => {
  });

  export {chatSocket,posts, commentsSocket, reactionsSocket};