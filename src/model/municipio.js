// src/models/municipio.js
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/database");
const Polo = require("./polo");

class Municipio extends Model {}

Municipio.init(
  {
    id_Municipio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    SB_Municipio: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_Polo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Polo,
        key: "id_Polo",
      },
    },
  },
  {
    sequelize,
    modelName: "Municipio",
    tableName: "SB_Municipio",
    timestamps: false,
  }
);

Municipio.belongsTo(Polo, { foreignKey: "id_Polo" });

module.exports = Municipio;
