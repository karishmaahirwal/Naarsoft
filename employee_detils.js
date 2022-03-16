var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karishma@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE TEST", function (err, result) {
    if (err) {
    console.log("Database already created");
    }else{
      console.log("Database created")
    }
  });
});


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karishma@123",
  database:"TEST"
});

con.connect(function(err) {
    if (err){ 
    console.log(err)
    }
    else{
    console.log("Connected!");
  }
  var sql = "CREATE TABLE Employee_details (EDID VARCHAR(255) ,EID VARCHAR(255), DID VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) {
    console.log("TABLE already created");
    }else{
      console.log("Table created")
    }
  });
});



