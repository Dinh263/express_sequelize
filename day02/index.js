var express = require('express');
var mysql = require('mysql2');
var app = express();

var db = mysql.createConnection({
    host: '192.168.2.39',
    user: 'java',
    password: 'unix11',
    database: 'nodemysql'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected!');
})

app.get("/createdb", (req, res)=>{
    var sql = "create database nodemysql";
    db.query(sql, (err)=>{
        if(err) throw err;
        res.send("Database created!");
    })
    
});

app.get("/createemployee", (req, res)=>{
    var sql = "create table employee(id int auto_increment, name varchar(255), designation varchar(255), primary key(id))";
    db.query(sql, (err)=>{
        if(err) throw err;
        res.send("Employee table created!");
    });
});

app.get("/employee1", (req, res)=>{
    var post = {name: "Jake smith", designation: "Chef Executive"};
    var sql = "insert into employee set ?";
    var query = db.query(sql, post, (err)=>{
        if(err) throw err;
        res.send("Employee 1 added!");
    })
});

app.get("/updateemployee/:id", (req, res)=>{
    var newName = "updated name";
    var sql = `update employee set name='${newName}' where id='${req.params.id}'`;
    var query = db.query(sql, (err)=>{
        if(err) throw err;
        res.send('Post updated!');
    })
});

app.get("/deleteemployee/:id", (req, res)=>{
    var sql = `delete from employee where id=${req.params.id}`;
    var query = db.query(sql, (err)=>{
        if(err) throw err;
        res.send('employee deleted!');
    })
});

app.listen(6000, ()=>{
    console.log("Server stared at port 6000");
})