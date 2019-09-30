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
		Confrontation.belongsTo(models.Phase, {
			foreignKey: 'phaseId',
      		sourceKey: 'id'
		})

		Confrontation.belongsTo(models.Teams, {
			foreignKey: 'teamA',
      		sourceKey: 'id'
		})

		Confrontation.belongsTo(models.Teams, {
			foreignKey: 'teamB',
      		sourceKey: 'id'
		})

		Confrontation.hasMany(models.Questions_round, {
			foreignKey: 'confrontationId',
			targetKey: 'id'

		})

    }

	return Confrontation

}