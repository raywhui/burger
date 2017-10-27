var connection = require('./connection.js');

var orm = {
  selectAll: function(callback){
  	connection.query('SELECT * FROM burgers', function(err,data){
      if (err) throw err;
      callback(data);
  	});
  },

  insertOne: function (burgerName,callback){
    var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?,FALSE)";
    connection.query(queryString, [burgerName], function(err, data) {
        if (err) throw err;
        callback(data);
    });
  },

  updateOne: function (id,callback){
    var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
  	connection.query(queryString, [id], function(err,data){
  		if (err) throw err;
      callback(data);
  	})
  }
};

module.exports = orm;