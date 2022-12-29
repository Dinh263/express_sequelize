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
sequelize.authenticate()
            .then(()=>{
                console.log('connection has been establish successfully!');
            })
            .catch((err)=>{
                console.error('Can not conect to database: ', err);
            });

var Book = sequelize.define("book", {
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
}); 

sequelize.sync().then(()=>{
     Book.findAll().then((res)=>{
        console.log(res);
     }).catch((err)=>{
        console.err('faield to retrieve data');
     });
}).catch((err)=>{
    console.error('unable to retrieve table! ', err);
});


