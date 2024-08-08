// src/models/polo.js
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/database");

class Polo extends Model {}

Polo.init(
  {
    id_Polo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    SB_Polo: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Polo",
    tableName: "SB_Polo",
    timestamps: false,
  }
);

module.exports = Polo;
