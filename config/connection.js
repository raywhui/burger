var mysql = require("mysql");

//Establish connection to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

//Checks if connects
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

	// connection.query('mysql syntax', function(err,data){
	// });

