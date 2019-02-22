var mysql = require("mysql");
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LL900901ll",
    database: "chad"
});



module.exports = db;