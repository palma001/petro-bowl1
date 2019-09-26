module.exports = (sequelize, DataType) => {
  const bcrypt = require('bcryptjs')

  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    eventId: {
      type: DataType.STRING,
      foreignKey: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    rols: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    user: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

  Users.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
  }

  Users.validatePassword = function (password, confirmPassword) {
    return bcrypt.compare(password, confirmPassword)
  }

  Users.associate = (models) => {
    Users.hasMany(models.Events, {
      foreignKey: 'eventId',
      sourceKey: 'id'

    })
  }

  return Users

}