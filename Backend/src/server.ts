import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// app.use(cors({
//     origin: ['http://localhost:3000', 'https://angry-pasteur-83335a.netlify.app'],
//     methods: 'Access-Control-Allow-Methods'
// }));

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);


const PORT = 3333;

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || PORT , () => console.log(`Server is running at port ${PORT}...`));