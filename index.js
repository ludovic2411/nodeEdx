const express = require('express');
const app = express();
const port= 3000;
const quotes = require('./models/quotes');

const getRequestHandler= (request,ressources) => {
    console.log("request url is " + request.url);
    return ressources;
};

app.get('/quotes',(req,res) => {
    if(req.query){
        res.json(getRequestHandler(req,quotes.byQuery(req.query)));
    } else {
        res.json(quotes.quotes());
    }
});
app.get('/quotes/:id',(req,res) => res.json(getRequestHandler(req,quotes.byId(req.params.id))));

app.listen(port,() => console.log("app listening on port "+port));