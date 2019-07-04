const request = require("request");
const cheerio = require("cheerio");

request("https://www.espn.com/nba/",(error,response,html) =>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);


        const contentItem = $(".contentItem__titleWrapper");
        // console.log(contentItem.html());
        // console.log(contentItem.text());
        // const output = contentItem.find("h1").text().trim();
       
        // 
        const scrape = contentItem.find('h1').next().text();
        console.log(scrape);
    }
});






// const scrape = function(cb) {
//     request("https://www.espn.com/nba/", (err, res, html) => {

//     if(!error && Response.statusCode == 200){
//         const $ =cheerio.load(html);
//     }
        
//         const articles = [];

//         $(".article-header").each(function(i, element){
//             const title = $(this).children("h1").text.trim();
//             const link = $(this).children(".data-src").text().trim();

//             if(head && link){
//                 let titleNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
//                 let linkNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

//                 let dataToAdd = {
                    
//                     titleline: titleNeat, 
//                     link: linkNeat
//                 };
//                 articles.push(dataToAdd);
                
//                 }
//         });
//         cb(articles);

//     });
// };
// console.log(scrape);

// module.exports = scrape;

