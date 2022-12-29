var {Sequelize, DataTypes} = require('sequelize');
var sequelize = new Sequelize('hello_world_db',
    'java',
    'unix11', {
        host: '192.168.2.39',
        dialect: 'mysql'
    });

sequelize.authenticate().then(()=>{
    console.log('connect to db sucessfully!');
}).catch(err=>{
    console.error('can not connect to db: ', err);
})

var Book = sequelize.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date:{
        type: DataTypes.DATEONLY,

    },
    subject:{
        type: DataTypes.INTEGER
    }
})

sequelize.sync().then(()=>{
    Book.findOne({
        where: {
            id: '1'
        }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.error('error while reading db: ', err);
    })
}).catch((err)=>{
    console.error('can not read table: ', err);
})