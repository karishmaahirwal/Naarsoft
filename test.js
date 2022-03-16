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


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Karishma@123",
//   database:"TEST"
// });

// con.connect(function(err) {
//     if (err){ 
//     console.log(err)
//     }
//     else{
//     console.log("Connected!");
//   }
//   var sql = "CREATE TABLE Employee (name VARCHAR(255) ,lastname VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) {
//     console.log("TABLE already created");
//     }else{
//       console.log("Table created")
//     }
//   });
// });




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karishma@123",
  database: "TEST"
});

con.connect(function(err) {
  if (err){ 
     console.log(err)
    }
    else{
      console.log("Connected!");
    }
  var sql = "INSERT INTO Employee (name, lastname) VALUES ? ";
  var values = [
      ["kajal", "Ahirwal"]
  ];
  con.query(sql, [values], function (err, result) {
      if (err) {
      console.log("No records inserted: ");
      }else{
        console.log("Record inserted")
      }
  });
});


  
 //select from

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karishma@123",
  database: "TEST"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Empolyee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});