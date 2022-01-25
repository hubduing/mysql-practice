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
  // offset начиная со 2 позиции
  const sql = 'Select * from customers LIMIT 5 OFFSET 2'; 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
})