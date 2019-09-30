module.exports = (sequelise, DataType) => {

	const Questions_round = sequelise.define('Questions_round', {

		id: {
      		type: DataType.INTEGER,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	confrontationId: {
    		type: DataType.INTEGER,
    		foreignKey: true

    	},
    	questionId: {
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
  		scoreA: {
  			type: DataType.STRING,
  			allowNull: false,
  			validate: {
  				notEmpty:true
  			}

  		},
  		scoreB: {
  			type: DataType.STRING,
  			allowNull: false,
  			validate: {
  				notEmpty:true
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
    	}


	})

	Questions_round.associate = (models) => {
		Questions_round.belongsTo(models.Confrontation, {
			foreignKey: 'confrontationId',
			sourceKey: 'id'
		})

		Questions_round.belongsTo(models.Teams, {
			foreignKey: 'teamA',
			sourceKey: 'id'
		})

		Questions_round.belongsTo(models.Teams, {
			foreignKey: 'teamB',
			sourceKey: 'id'
		})

		Questions_round.belongsTo(models.Questions, {
			foreignKey: 'questionId',
			sourceKey: 'id'												
		})
	}
	
	return Questions_round
}