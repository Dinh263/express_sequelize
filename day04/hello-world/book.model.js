var {Sequelize, DataTypes} = require('sequelize');

var sequelize = new Sequelize(
    'hello_world_db',
    'java',
    'unix11',
    {
        host: '192.168.2.39',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log('connection has been established successfully!');
}).catch((err)=>{
    console.error('Can not connect to database!', err);
});

var Book = sequelize.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date:{
        type: DataTypes.DATEONLY
    },
    subject:{
        type: DataTypes.INTEGER
    }
});

sequelize.sync().then(()=>{
    console.log('booke table is created successfully!');
}).catch((err)=>{
    console.error('unable to create table: ', err);
});