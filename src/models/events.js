module.exports = (sequelize, DataType) => {

  const Events = sequelize.define('Events', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
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
    Events.belongsTo(models.Users)
  }

  return Events
}