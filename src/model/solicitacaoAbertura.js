const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_SolicitacaoBase = require("./solicitacaoBase");

class SB_SolicitacaoAbertura extends Model {}

SB_SolicitacaoAbertura.init(
  {
    id_SolicitacaoAbertura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataAbertura: DataTypes.DATE,
    SB_HoraAbertura: DataTypes.TIME,
    SB_HNMotivo: DataTypes.STRING,
    SB_HNObservacoes: DataTypes.STRING,
    SB_HSData: DataTypes.DATE,
    SB_Solicitante: DataTypes.STRING,
    SB_ServicoAceito: DataTypes.TINYINT,
    SB_SolicitacaoBase_id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_SolicitacaoBase,
        key: "id_SolicitacaoBase",
      },
    },
    SB_SolicitacaoBase_id_Endereco: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_SolicitacaoBase,
        key: "SB_Endereco_id_Endereco",
      },
    },
  },
  {
    sequelize,
    modelName: "SB_SolicitacaoAbertura",
    tableName: "sb_solicitacaoabertura",
    timestamps: false,
  }
);

SB_SolicitacaoAbertura.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_SolicitacaoBase",
  targetKey: "id_SolicitacaoBase",
});

SB_SolicitacaoAbertura.bekongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_Endereco:",
  targetKey: "SB_Endereco_id_Endereco",
});

module.exports = SB_SolicitacaoAbertura;
