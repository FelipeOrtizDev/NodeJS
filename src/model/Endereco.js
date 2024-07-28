const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

class SB_Endereco extends Model {}

SB_Endereco.init(
  {
    id_Endereco: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_Municipio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SB_Complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SB_Bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_ZonaPressao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Polo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Referencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Cruzamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_SetorAbastecimento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SB_Endereco",
    tableName: "SB_Endereco",
    timestamps: false,
  }
);

module.exports = SB_Endereco;
