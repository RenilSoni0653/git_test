const express = require('express');
const http = require('http');  // This is for creating server or server requests.
//const morgan = require('morgan');  // This is Middleware.

const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');  // It will import dishRouter.js file here

const promoRouter = require('./routes/promoRouter');  // It will import promoRouter.js file here
const leaderRouter = require('./routes/leaderRouter');  // It will import leaderRouter.js file here

const hostname = 'localhost';
const port = 3000;

const app = express();

//app.use(morgan('dev'));  // This is Middleware called morgan.
app.use(bodyParser.json());  // This will check the content of JSON (JavaScript Object Notation).

app.use('/dishes', dishRouter);  // In first paramater, if you write /dishesRouter than you have to write http://localhost:3000/dishesRouter and dishRouter is a file name which is Second parameter.
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

//  First is /dishes REST end point.
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;  // Ok
    res.setHeader('Content-Type','text/plain');
    next();  // when you call next, what it means is that it'll continue on to look for additional specifications down below.
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);  // body.name means it will Parse JSON data into plain text it means you have to enter some data by own.
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');
});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send all the details of dish: ' + req.params.dishId + ' to you!');  // params means it will take dishId by parameter in req.
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 'with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting the dish: ' + req.params.dishId);
});

// Second is /promotions REST end point.
app.all('/promotions', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/promotions', (req, res, next) => {
    res.end('Will send all the PromoRouter to you!');
});

app.post('/promotions', (req, res, next) => {
    res.end('Will add the PromoRouter: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/promotions', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promoRouter');
});

app.delete('/promotions', (req, res, next) => {
    res.end('Deleting all the promoRouters!');
});

app.get('/promotions/:promoId', (req, res, next) => {
    res.end('Will send all the details of promoRouter: ' + req.params.promoId + ' to you!');
});

app.post('/promotions/:promoId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promoRouter/' + req.params.promoId);
});

app.put('/promotions/:promoId', (req, res, next) => {
    res.write('Updating the promoRouter: ' + req.params.promoId + '\n');
    res.end('Will update the promoRouter: ' + req.body.name + 'with details: ' + req.body.description);
});

app.delete('/promotions/:promoId', (req, res, next) => {
    res.end('Deleting the promoRouter: ' + req.params.promoId);
});

// Third is /leaders REST end point.
app.all('/leaders', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/leaders', (req, res, next) => {
    res.end('Will send all the leaderRouter to you!');
});

app.post('/leaders', (req, res, next) => {
    res.end('Will add the leaderRouter: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/leaders', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaderRouter');
});

app.delete('/leaders', (req, res, next) => {
    res.end('Deleting all the leaderRouters!');
});

app.get('/leaders/:leaderId', (req, res, next) => {
    res.end('Will send all the details of leaderRouter: ' + req.params.leaderId + ' to you!');
});

app.post('/leaders/:leaderId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaderRouter/' + req.params.leaderId);
});

app.put('/leaders/:leaderId', (req, res, next) => {
    res.write('Updating the leaderRouter: ' + req.params.leaderId + '\n');
    res.end('Will update the leaderRouter: ' + req.body.name + 'with details: ' + req.body.description);
});

app.delete('/leaders/:leaderId', (req, res, next) => {
    res.end('Deleting the leaderRouter: ' + req.params.leaderId);
});

const server = http.createServer(app);  // This will createServer like http://localhost:3000

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
});