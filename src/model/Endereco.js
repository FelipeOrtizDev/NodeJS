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
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    SB_Logradouro: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    SB_Numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SB_Complemento: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    SB_Bairro: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    SB_ZonaPressao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    SB_Polo: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    SB_Referencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    SB_SetorAbastecimento: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    SB_Cruzamento: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SB_Endereco",
    tableName: "sb_endereco",
    timestamps: false,
  }
);

module.exports = SB_Endereco;
