module.exports = function(sequelize, DataTypes) {
  const Case = sequelize.define("Case", {
  geolocation: {
    type: DataTypes.STRING
  },
  location_type: {
    type: DataTypes.STRING
  },
  disaster_type: {
    type: DataTypes.STRING
  },
  items_needed: {
    type: DataTypes.STRING
  },
  demographic: {
    type: DataTypes.STRING
  },
  number_affected: {
    type: DataTypes.STRING
  },
  case_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  time_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW 
  }
});
  return Case;
}

