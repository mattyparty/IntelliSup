// Defining the Supplier table
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    'supplier',
    {
      supplier_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { underscored: true }
  );

  // Associating Supplier table to Supplier Map Login table
  Supplier.associate = (models) => {
    Supplier.hasMany(models.supplier_map_login);
  };

  return Supplier;
};
