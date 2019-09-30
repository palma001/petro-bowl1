module.exports = (sequelise, DataType) => {

	const Competitors = sequelise.define('Competitors', {

		teamId: {
  			type: DataType.INTEGER,
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
    	email: {
      		type: DataType.STRING,
      		unique: true,
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

	Competitors.associate = (models) => {
		Competitors.belongsTo(models.Teams, {
			foreignKey: 'teamId',
			sourceKey: 'id'	
		})
		
	}
	return Competitors
}