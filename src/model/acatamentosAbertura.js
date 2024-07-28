const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

class SB_AcatamentosAbertura extends Model {}

SB_AcatamentosAbertura.init(
  {
    id_AcatamentosAbertura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataAcatamentoAbertura: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    SB_PrvisaoAcatamentoAbertura: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    SB_EquipeResponsavelAbertura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_SolicitacaoAbertura_id_SolicitacaoAbertura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SB_ObservacaoAcatamentoAbertura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SB_AcatamentosAbertura",
    tableName: "SB_AcatamentosAbertura",
    timestamps: false,
  }
);

module.exports = SB_AcatamentosAbertura;