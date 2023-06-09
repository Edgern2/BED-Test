const mysql = require('mysql2');

const setting = {
    connectionLimit : 10, //set limit to 10 connection
    host     : 'WRITE YOUR HOST HERE',
    user     : 'WRITE YOUR USER HERE',
    password : 'WRITE YOUR PASSWORD HERE',
    database : 'WRITE YOUR DATABASE HERE',
    multipleStatements: true, //allow multiple sql statements
    dateStrings: true //return date as string instead of Date object
}

const pool = mysql.createPool(setting);

module.exports = pool;