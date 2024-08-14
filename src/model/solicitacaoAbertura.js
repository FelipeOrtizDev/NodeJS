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
    SB_HAbertura: DataTypes.TIME,
    SB_HoraAbertura: DataTypes.TIME,
    SB_HNMotivo: DataTypes.STRING(100),
    SB_HNObservacoes: DataTypes.STRING(250),
    SB_Rede: DataTypes.STRING(45),
    SB_UtilizouMZ: DataTypes.STRING(45),
    SB_AbertoPor: DataTypes.STRING(45),
    SB_HSData: DataTypes.DATE,
    SB_HSData: DataTypes.DATE,
    SB_Solicitante: DataTypes.STRING(45),
    SB_ServicoAceito: DataTypes.TINYINT,
    SB_Previsao: DataTypes.TIME,
    SB_ManobraWFM: DataTypes.STRING(100),
    SB_Executante: DataTypes.STRING(100),
    SB_HFSObservacaoAbertura: DataTypes.STRING(250),
    SB_QTDEligacoes: DataTypes.STRING(45),
    SB_OAberto: DataTypes.STRING(100),
    SB_HSNMotivo: DataTypes.STRING(45),
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

SB_SolicitacaoAbertura.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_Endereco",
  targetKey: "SB_Endereco_id_Endereco",
});

module.exports = SB_SolicitacaoAbertura;
