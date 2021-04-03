const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE names (id INT primary key auto_increment, name VARCHAR(1000000), date_added DATETIME)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});