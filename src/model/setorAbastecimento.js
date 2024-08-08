// src/models/setorAbastecimento.js
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/database");
const Municipio = require("./municipio");

class SetorAbastecimento extends Model {}

SetorAbastecimento.init(
  {
    id_SetorAbastecimento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    SB_SetorAbastecimento: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_Municipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Municipio,
        key: "id_Municipio",
      },
    },
  },
  {
    sequelize,
    modelName: "SetorAbastecimento",
    tableName: "SB_SetorAbastecimento",
    timestamps: false,
  }
);

SetorAbastecimento.belongsTo(Municipio, { foreignKey: "id_Municipio" });

module.exports = SetorAbastecimento;
