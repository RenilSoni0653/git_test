const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the PromoRouter to you!');
})
.post((req, res, next) => {
    res.end('Will add the PromoRouter: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /PromoRouters');
})
.delete((req, res, next) => {
    res.end('Deleting all PromoRouters');
});

module.exports = promoRouter;