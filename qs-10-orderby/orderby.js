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
  const sql = 'SELECT * FROM customers ORDER BY name'; 
  // DESC в конце запроса - реверс сортировка
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
})