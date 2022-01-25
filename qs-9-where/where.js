var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "mydb",
});
// where
// con.connect((err) => {
//     if (err) throw err;
//     console.log('Connect');
//     const sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
//     con.query(sql, function(err, result, fields) {
//         if(err) throw err;
//         console.log(result);
//     })
// })

con.connect((err) => {
  if (err) throw err;
  console.log('Connect');
  const name = 'Amy';
  const adr = 'Mountain 21';
  const sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
})