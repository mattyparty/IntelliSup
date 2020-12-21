module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('supplier', {
    supplier_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    supplier_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Supplier;
};
