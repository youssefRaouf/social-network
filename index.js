require('dotenv').config({path: __dirname + '/.env'})
import 'dotenv/config';
import mongoose from 'mongoose';
import "regenerator-runtime/runtime";
import bodyParser from 'body-parser';
import Router from './Router';
import express from 'express';
import socket from 'socket.io';
import http from 'http';
mongoose.connect('mongodb+srv://mongoadmin:4G3mHY8McXGq4C9t@cluster0-h449g.mongodb.net/socialdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
export let jwt = require('jsonwebtoken')
const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(bodyParser.urlencoded({ extended: true }));
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
  let token = req.header('token')
  if(req.path.includes('login')){
    return next();
  }
  let object = jwt.verify(token, 'secret');
  if(object){    
      req.user = object.user;
      req.userId = object.user._id;
  return    next();
  }
  // if (token === 'null') {
  //   console.log("hna")
  // }
  // else if (token) {
  //   let object = jwt.verify(token, 'secret');
  //   req.userId = object.user._id;
  //   req.user = object.user;
  // }
  req.user = {
    _id: '5ef6048f5a32c2379a7d0f9b',
    name: 'Youssef'
  }
  req.userId = '5ef6048f5a32c2379a7d0f9b'
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
  });
const roomSocket = io
  .of('/room')
  .on('connection', (socket) => {
  });
const reactionsSocket = io
  .of('/posts/reactions')
  .on('connection', (socket) => {
  });

export { roomSocket, chatSocket, posts, commentsSocket, reactionsSocket };