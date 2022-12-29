var {Sequelize, DataTypes} = require('sequelize');

var sequelize = new Sequelize(
    'hello_world_db',
    'java',
    'unix11',
    {
        host: '192.168.10.159',
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
    Book.create({
        title: 'Kill World',
        author: 'Janet Jackon',
        release_date: '2021-09-03',
        subject: 5
    }).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.error('Failed to insert new record: ', err);
    })
}).catch((err)=>{
    console.error('unable to create table: ', err);
});