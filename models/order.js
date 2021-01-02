// const { Sequelize } = require("sequelize/types");

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
        type: DataTypes.DATE,
        allowNull: false
      },
      est_ship_date: {
        type: DataTypes.DATE,
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

  Order.associate = (models) => {
    Order.belongsTo(models.supplier, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
