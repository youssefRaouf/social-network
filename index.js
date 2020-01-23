
import 'dotenv/config';
import "regenerator-runtime/runtime";
import bodyParser from 'body-parser';
import Router from './Router';
import express from 'express';
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

  
const port = 3000
const router = new Router(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))