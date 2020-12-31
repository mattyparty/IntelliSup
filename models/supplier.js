module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    'Supplier',
    {
      supplier_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      supplier_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );
  // added association - mlp

  Supplier.associate = (models) => {
    Supplier.hasMany(models.Openpos);
  };
  return Supplier;
};
