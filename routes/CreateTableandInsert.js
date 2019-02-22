
var CreateTable = function (){
    // First we create the connection to the chad server.
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "LL900901ll",
        database: "chad"
    });
    connection.connect();

    // The first step, Creating the categories tables.

    var createTablesql = "CREATE TABLE IF NOT EXISTS ilance_categories (cid int(10) PRIMARY KEY, categories VARCHAR(250)) ";
    connection.query(createTablesql,function(err, result){
        if (err){
            throw err
        }
        console.log("TABLE CREATE");
        console.log(result);
    });

    // // we insert three data, one is the cid = 3 and as the category3 and the other is cid = 1 and as the category1 and cid = 2 and the category2
    var insertsql = "INSERT INTO ilance_categories (cid, categories) VALUES ('3', 'category3')";
    connection.query(insertsql, function(err, result){
        if (err){
            throw err
        }
        console.log("Data3 inserted!");
        console.log(result);
    })
    var insertsql = "INSERT INTO ilance_categories (cid, categories) VALUES ('1', 'category1')";
    connection.query(insertsql, function(err, result){
        if (err){
            throw err
        }
        console.log("Data1 inserted!");
        console.log(result);
    });
    var insertsql = "INSERT INTO ilance_categories (cid, categories) VALUES ('2', 'category2')";
    connection.query(insertsql, function(err, result){
        if (err){
            throw err
        }
        console.log("Data2 inserted!");
        console.log(result);
    });
    // // After the three data inserted, do the join statment.

    // var joinsql = "SELECT * FROM ilance_users AS u JOIN ilance_projects AS p ON p.user_id = u.user_id ";
    // connection.query(joinsql, function(err, result){

    //     if (err) throw err;
    //     var leftjoinsql = "SELECT * FROM ? AS r LEFT JOIN ilance_categories AS c ON r.cid = c.cid ";
    //     connection.query(leftjoinsql,[result], function(err,finalresult){
    //         if (err) throw err;
    //         console.log("Join!!");
    //         console.log(finalresult);
    //     })
    // }) 
}

module.exports = CreateTable;
