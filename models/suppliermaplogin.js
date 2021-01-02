module.exports = (sequelize, DataTypes) => {
  const SupplierMapLogin = sequelize.define(
    'supplier_map_login',
    {
      login_email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      supplier_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  SupplierMapLogin.associate = (models) => {
    SupplierMapLogin.hasMany(models.order);
    SupplierMapLogin.belongsTo(models.supplier);
  };
  return SupplierMapLogin;
};
