var Sequelize = require('sequelize');
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
    console.error('unable to connect database!', err);
});



