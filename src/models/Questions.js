module.exports = (sequelise, DataType) => {
	const Questions = sequelise.define('Questions', {

		id: {
      		type: DataType.INTEGER,
      		primaryKey: true,
      		autoIncrement: true
    	},
    	question: {
    		type: DataType.STRING,
    		allowNull: false,
    		validate: {
    			notEmpty: true
    		}
    	},
    	status: {
    		type: DataType.STRING,
    		allowNull: false,
    		validate: {
    			notEmpty: true
    		}
    	},
    	reply: {
    		type: DataType.STRING,
    		allowNull: false,
    		validate: {
    			notEmpty: true
    		}
    	},
    	typeQuestion: {
    		type: DataType.STRING,
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
    	}



	})
	Questions.associate = (models) => {

		Questions.hasMany(models.Questions_round, {
			foreignKey: 'questionId',
			targetKey: 'id'			      		
		})

	}

	return Questions

}