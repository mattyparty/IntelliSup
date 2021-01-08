// Defining the Order table
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'order',
    {
      po_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false
      },
      po_received: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      po_due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      est_ship_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      tracking_number: {
        type: DataTypes.STRING,
        allowNull: true
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

  // Associating Order table to Supplier Map Login table
  Order.associate = (models) => {
    Order.belongsTo(models.supplier_map_login, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
