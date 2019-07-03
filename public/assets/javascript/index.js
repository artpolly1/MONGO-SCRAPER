// $(document).ready(function(){


//     let articleContainer = $(".article-continer");
//     $(document).on("click", ".scrape-new", handleArticleScrape);

//     initPage();

//         articleContainer.empty();
//         $get("/api/headlines?saved=false")
//         .then(function(found){
//             if(found && data.length) {
//                 renderArticles(found);
//             }
//             else {
//                 renderEmpty();
//             }
//         });

// },
// function renderArticles(articles){
// let articlesPanels = [];

// for(let i= 0; i < articles.length; i++) {
//     articlesPanels.push(createPanel(articles[i]));
// }
// }

// }

// function renderEmpty() {
//     $(["<div class= 'alert alert-warning text-center'>",
//     "<h4>There are no new articles.</h4>",
//     "<div>"
// ].joine(""));

// }