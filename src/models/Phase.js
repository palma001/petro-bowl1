module.exports = (sequelise, DataType) => {

	const Phase = sequelise.define('Phase', {

		id: {
      		type: DataType.INTEGER,
      		primaryKey: true,
      		autoIncrement: true
  		},

  		eventId: {
      		type: DataType.INTEGER,
      		foreignKey: true
    	},

    	namePhase: {
    		type: DataType.STRING,
    		allowNull: false,
    		validate: {
    			notEmpty: true
    		}
    	},

    	numPhase: {
    		type: DataType.INTEGER,
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

	Phase.associate = (models) => {
		Phase.hasMany(models.Events, {
			foreignKey: 'eventId',
      		sourceKey: 'id'
		})

		Phase.hasMany(models.Confrontation, {
			foreignKey: 'eventId',
      		targetKey: 'id'
		})

    }

    return Phase

}