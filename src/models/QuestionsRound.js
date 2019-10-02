module.exports = (sequelise, DataType) => {

	const QuestionsRound = sequelise.define('QuestionsRound', {

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

	QuestionsRound.associate = (models) => {
		QuestionsRound.belongsTo(models.Confrontation, {
			foreignKey: 'confrontationId',
			sourceKey: 'id'
		})

		QuestionsRound.belongsTo(models.Teams, {
			foreignKey: 'teamA',
			sourceKey: 'id'
		})

		QuestionsRound.belongsTo(models.Teams, {
			foreignKey: 'teamB',
			sourceKey: 'id'
		})

		QuestionsRound.belongsTo(models.Questions, {
			foreignKey: 'questionId',
			sourceKey: 'id'												
		})
	}
	
	return QuestionsRound
}