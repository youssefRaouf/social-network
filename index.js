
import 'dotenv/config';
import "regenerator-runtime/runtime";
import bodyParser from 'body-parser';
import Router from './Router';
import express from 'express';
import socket from 'socket.io'
const app = express()
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
    req.userId = 3;
    next();
  });
  
const port = process.env.PORT || 4000
const router = new Router(app);

app.listen(port, () => console.log(`Social app listening on port ${port}!`))
//  export let io =socket(server);
//  io.on('connection',function(socket){
//   console.log("connect")
//   //  socket.on("createPost",()=>console.log("create"))
//  })

const server = require('http').createServer(app)
const io = require('socket.io')(server)

const posts = io
  .of('/posts')
  .on('connection', function (socket) {
    
  });
  
  const commentsSocket = io
  .of('/posts/comments')
  .on('connection', (socket) => {
  });

  const reactionsSocket = io
  .of('/posts/reactions')
  .on('connection', (socket) => {
  });

  export {posts, commentsSocket, reactionsSocket};