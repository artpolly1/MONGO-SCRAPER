let scrape = require("../scripts/scraped");
let makeDate = require("../scripts/date");


let Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb){
        scrape(function(found) {
            const articles = found;
            for(let i=0; i < articles; i++){
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles, {ordered:false}, function(){
                cb(err, docs);
            });
        });    
    },
    delete: function(query, cb){
        Headline.remove(query, cb);
    },
    get: function(query, cb){
        Headline.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, doc){
            cb(doc);
        });
    },
    update: function(query, cb) {
        Headline.update({_id: query._id}, {
            $set: query
        }, {}, cb);
    }
}


            
    


