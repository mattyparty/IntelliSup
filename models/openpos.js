// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Openpos = sequelize.define(
    'open_pos',
    {
      po_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false
      },
      po_recieved: {
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
    { freezeTableName: true }
  );
  return Openpos;
};
