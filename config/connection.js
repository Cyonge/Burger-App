// this is for setup the code to connect Node to MySQL. * Export the connection.
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "southpadre1",
    database: "burgers_DB"
})

connection.connect((err) => {
    
    if (err){
        console.log("error connecting" + err.stack)
        return
    }
    console.log("connected as id " + connection.threadId)
})

module.exports = connection;