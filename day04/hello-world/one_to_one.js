var {Sequelize, DataTypes} = require('sequelize');

var sequelize = new Sequelize(
    'student_db',
    'java',
    'unix11',
    {
        host: '192.168.2.39',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log('connect to db successfully');
}).catch((err)=>{
    console.error('can not connect to db: ', err);
});

var Student = sequelize.define("students", {
    student_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

var Grade = sequelize.define('grades', {
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

var grade_data = [{grade: 9}, {grade:10}, {grade:11}];

var student_data = [
    {name: 'John Baker', gradeId: 2},
    {name: 'Max Butler', gradeId: 1},
    {name: 'Ryan Fisher', gradeId: 3},
    {name: 'Robert Gray', gradeId: 3},
    {name: 'Ribbeca Smith', gradeId: 2},
]

Student.belongsTo(Grade);


sequelize.sync({force: true}).then(()=>{
    Grade.bulkCreate(grade_data, {validate: true}).then(()=>{
        Student.bulkCreate(student_data, {validate: true}).then(()=>{
            Student.findAll(
                {include: [{
                    model: Grade
                }
                   
                ]}
            ).then((result)=>{
                console.log(result);
            }).catch((err)=>{
                console.log('error retrive data: ', err);
            }) 
        }).catch((err)=>{
            console.error('error while insert student: ', err);
        })
    }).catch((err)=>{
        console.error('error while insert data grade: ', err);
    })
}).catch((err)=>{
    console.error('create tables get error: ', err);
})

