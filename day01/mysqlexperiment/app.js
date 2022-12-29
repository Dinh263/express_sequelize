const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '192.168.2.39',
    user: 'java', 
    password: 'unix11',
    database: 'temp',
    port: 3306
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to mysql server!');
    console.log('hello the world');
    


});