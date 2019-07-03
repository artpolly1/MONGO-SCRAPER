const request = require("request");
const cheerio = require("cheerio");

const scrape = function(cb) {
    request( "https://www.espn.com/nba/", function(err, res, body) {
        const $ =cheerio.load(body);
        const articles = [];

        $(".article-header").each(function(i, element){
            const title = $(this).children("h1").text.trim();
            const link = $(this).children(".data-src").text().trim();

            if(head && link){
                let titleNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                let linkNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                let dataToAdd = {
                    
                    titleline: titleNeat, 
                    link: linkNeat
                };
                articles.push(dataToAdd);
                
                }
        });
        cb(articles);

    });
};
console.log(scrape);

module.exports = scrape;

