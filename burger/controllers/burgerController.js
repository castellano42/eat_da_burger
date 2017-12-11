var express = require("express");
var burger = require('../models/burger');

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all((data) => {
    res.render("index", {burgers: data});
  });
});

router.post("/api/burger", (req, res) => {
  burger.create([
    "burger_name", "devoured", "date"
  ], [
    req.body.burger_name, false, new Date()
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;