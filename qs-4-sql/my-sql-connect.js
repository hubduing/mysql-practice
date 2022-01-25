const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234'
})

con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');

    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Result' + result);
    })
})