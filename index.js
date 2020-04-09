const express = require('express');
const app = express();
const port= 3000;
const quotes = require('./models/quotes');

const getRequestHandler= (request,ressources) => {
    console.log("request url is "+ request.url);
    return ressources;
};

app.get('/', (req,res) => res.json(getRequestHandler(req,quotes.quotes())));

app.listen(port,() => console.log("app listening on port "+port));