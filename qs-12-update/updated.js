var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connect');
  const sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"; 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows, "records updated");
  });
})