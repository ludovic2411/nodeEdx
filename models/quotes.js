 const quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    },
     {
         id: 4,
         quote: "To break the rules, you must first master them",
         author: "Tony Stark",
         year: 2016
     }
];

 const  byAuthor = (author) => {
     return quotes.filter(q => q.author === author);
 };

const  byYear = (year) => {
    return quotes.filter(q => q.year == year );
};

const addQuote = (quote) => {
     quotes.push(quote);
     return quotes;
};

const updateQuote = (id, quote) => {
    quotes.forEach(q => {
        if(q.id == id){
            q.id = id;
            q.quote = quote.quotes;
            q.author = quote.author;
            q.year = quote.year;
        }
    });
    return quote;
};

const deleteQuote = (id) => {
    let i = 0;
   while (i < quotes.length){
       if (quotes[i].id == id){
           quotes.splice(i,1);
       }
       i++
   }
   return quotes
};

 const byQuery = (query) => {
     if(query.year){ return byYear(query.year); }
     else if(query.author){ return byAuthor(query.author) }
     else {return quotes}
 };

module.exports = {
    quotes : () => {return quotes},
    byId : (id) => {
        return quotes.filter(q => q.id == id);
    },
    byQuery : (query) => {
        return byQuery(query);
    },
    addQuote : (quote) => {
        return addQuote(quote);
    },
    updateQuote : (id, quote) => {
        return updateQuote(id,quote);
    },
    deletQuote : (id)=> {
        return deleteQuote(id);
    }
};