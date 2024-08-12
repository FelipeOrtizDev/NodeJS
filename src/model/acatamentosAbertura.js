const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_SolicitacaoBase = require("./solicitacaoBase");

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
    SB_PrevisaoAcatamentoAbertura: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    SB_EquipeResponsavelAbertura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_SolicitacaoBase_id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SB_SolicitacaoBase,
        key: "id_SolicitacaoBase",
      },
    },
    SB_SolicitacaoBase_id_Endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SB_SolicitacaoBase,
        key: "SB_Endereco_id_Endereco",
      },
    },
    SB_ObservacaoAcatamentoAbertura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SB_AcatamentosAbertura",
    tableName: "sb_acatamentosabertura",
    timestamps: false,
  }
);

SB_AcatamentosAbertura.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_SolicitacaoBase",
  targetKey: "id_SolicitacaoBase",
});
SB_AcatamentosAbertura.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_Endereco",
  targetKey: "SB_Endereco_id_Endereco",
});

module.exports = SB_AcatamentosAbertura;
