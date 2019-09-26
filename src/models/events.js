module.exports = (sequelize, DataType) => {

  const Events = sequelize.define('Events', {

    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    organizer: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    address: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    dateEvent: {
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    created_by: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    updated_by: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
   
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  Events.associate = (models) => {
    Events.belongsTo(models.Users,{
      foreignKey: 'eventId',
      targetKey: 'id'

    })

    Events.belongsTo(models.Phase,{
      foreignKey: 'eventId',
      targetKey: 'id'

    })
  }

  

  return Events
}