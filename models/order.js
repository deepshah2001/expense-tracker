const Sequelize = require("sequelize");

const sequelize = require("../util/database");

// Created model for structure of table in database
const Order = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  paymentid: Sequelize.STRING,
  orderid: Sequelize.STRING,
  status: Sequelize.STRING,
});

module.exports = Order;
