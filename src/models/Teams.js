module.exports =(sequelise, DataType) => {

	const Teams = sequelise.define('Teams', {
		
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
    	
    	university: {
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

	Teams.associate = (models) => {
		Teams.belongsTo(models.Confrontation, {
			foreignKey: 'teamA',
      		targetKey: 'id'
		})

		Teams.belongsTo(models.Confrontation, {
			foreignKey: 'teamB',
      		targetKey: 'id'
		})

    }

    return Teams
}