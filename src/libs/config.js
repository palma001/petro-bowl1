const pg = require('pg')
module.exports = {
  database: 'petro_bowl',
  username: 'ramon',
  password: '123456',
  params: {
    host: 'localhost',
    dialect: 'postgres',
    storage: 'task-db.sql',
    dialectModule: pg,
    pool:{
      max: 5,
      min: 0,
      require:30000,
      idle:false

    },
    logging: false,
    define: {
      underscored: true
    },
    operatorsAliases: false
  }
}