var orm = require("../config/orm");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
}

module.exports = burger;