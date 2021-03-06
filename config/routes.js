const scrape = require("../scripts/scraped");


const headlinesController = require("../controllers/headlines");
const notesController = require("../controllers/notes");


module.exports = function(router){
    router.get("/", function(req, response){
        response.render("home");
    });

    router.get("/scraped", function(req, res){
      res.render("scraped");
    });

    router.get("/saved", function(req, res){
      res.render("saved");
    });

    router.get("/api/fetch", function(req, res){
      if(!docs || docs.insertedCount === 0){
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }
      else {
        res.json({
          message: "Added" + docs.insertedCount + "new articles!"
        })
      }
    });
    router.get("/api/headlines", function(req, res) {
      let query = {};
      if(req.query.saved){
        query = req.query;
      }
      headlinesController.get(query, function(found){
        res.json(found);
      });
    });

    router.delete("/api/headlines/:id", function(req, res){
      let query = {};
      query._id = req.params.id;
      headlinesController.delete(query, function(err, data){
        res.json(found);
      });
    });

    router.patch("/api/headlines", function(req, res) {
      headlinesController.update(req.body, function(err, data){
        res.json(found);
      });
    });

    router.get("/api/headlines", function(req,res){
      let query = {};
      if(req.params.headline_id) {
        query._id = req.params.headline_id;
      }
      notesController.get(query, function(err, found) {
        res.json(found);

    });

  });
  router.delete("/api/notes/:id",function(req, res){
    let query = {};
    query._id = req.params.id;
    notesController.delete(query, function(err, data) {
      res.json(found);

    });
  });
router.post("/api/notes", function(req, res){
  notesController.saved(req.body, function(found) {
    res.json(found);
  });
});

}