const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

class SB_SolicitacaoAbertura extends Model {}

SB_SolicitacaoAbertura.init(
  {
    id_SolicitacaoAbertura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataAbertura: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SB_SolicitacaoBase_id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SB_SolicitacaoBase_SB_Enderecos_id_Endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SB_HAbertura: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    SB_HNMotivo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SB_HNObservações: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SB_HSData: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SB_HoraAbertura: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    SB_Solicitante: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SB_ServiçoAceito: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SB_SolicitacaoAbertura",
    tableName: "SB_SolicitacaoAbertura",
    timestamps: false,
  }
);

module.exports = SB_SolicitacaoAbertura;
