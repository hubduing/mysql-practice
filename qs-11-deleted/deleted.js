var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "mydb",
});
// DONT LAUNCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
con.connect((err) => {
  if (err) throw err;
  console.log('Connect');
  const sql = 'DROP TABLE customers'; 
  // DESC в конце запроса - реверс сортировка
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table drop (deleted)');
  });
})