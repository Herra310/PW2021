const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "Hr123456",
    "database": "crud_node"
}

// crear conexion
const myConn = mysql.createConnection(objectConnection);

//conectar
myConn.connect((err) => {
    if (err) {
        console.log("Error bd: ", err);
    } else {
        console.log("Base de datos conectada")
    }
});

module.exports = myConn;