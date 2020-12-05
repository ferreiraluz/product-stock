const Sequelize = require("sequelize");
const db = require("./config/db");
const sequelize = db;

const Product = sequelize.define('Product', ({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    value: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}));

sequelize.sync();

module.exports = Product;