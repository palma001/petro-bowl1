module.exports =(sequelise, DataType) => {

	const Confrontation = sequelise.define('Confrontation', {
		id: {
      		type: DataType.INTEGER,
      		primaryKey: true,
      		autoIncrement: true
  		},

  		phaseId: {
  			type: DataType.INTEGER,
  			foreignKey: true
  		},
  		teamA: {
  			type: DataType.INTEGER,
  			foreignKey: true

  		},
  		teamB: {
  			type: DataType.INTEGER,
  			foreignKey: true

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
    	}
	})
	Confrontation.associate = (models) => {
		Confrontation.hasMany(models.Phase, {
			foreignKey: 'phaseId',
      		sourceKey: 'id'
		})

		Confrontation.hasMany(models.Teams, {
			foreignKey: 'teamA',
      		sourceKey: 'id'
		})

		Confrontation.hasMany(models.Teams, {
			foreignKey: 'teamB',
      		sourceKey: 'id'
		})

		Confrontation.hasMany(models.Confrontation, {
			foreignKey: 'eventId',
      		sourceKey: 'id'
		})


    }

	return Confrontation

}