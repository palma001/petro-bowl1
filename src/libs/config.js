const mysql2 = require('mysql2')
module.exports = {
  database: 'petro_bowl',
  username: 'root',
  password: '',
  params: {
    dialect: 'mysql',
    storage: 'task-db.sql',
    dialectModule: mysql2,
    define: {
      underscored: true
    },
    operatorsAliases: false
  }
}