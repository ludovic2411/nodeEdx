const express = require('express');
const app = express();
app.use(express.json());
const port= 3000;
const quotes = require('./models/quotes');

const getRequestHandler= (request,ressources) => {
    return ressources;
};

const postRequestHandler = (request,ressources) => {
    return ressources;
};

const putRequesthandler = (ressources) => {
    return ressources;
};

const deleteRequestHandler = (ressources) => {
    return ressources;
}

app.route('/quotes')
    .get((req,res) => {
    if(req.query){
        res.json(getRequestHandler(req,quotes.byQuery(req.query)));
    } else {
        res.json(getRequestHandler(req,quotes.quotes()));
    }
    }
)
    .post((req,res) => res.json(postRequestHandler(req,quotes.addQuote(req.body))));

app.route('/quotes/:id')
    .get((req,res) => res.json(getRequestHandler(req,quotes.byId(req.params.id))))
    .put((req,res) => {
        res.json(putRequesthandler(quotes.updateQuote(req.params.id,req.body)))
    })
    .delete((req,res) => res.json(deleteRequestHandler(quotes.deletQuote(req.params.id))));


app.listen(port,() => console.log("app listening on port "+port));