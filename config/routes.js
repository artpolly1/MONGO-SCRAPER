module.exports = function(router){
    router.get("/", function(req, response){
        response.render("home");
    });

    router.get("/saved", function(req, res){
      res.render("saved");
    });
}