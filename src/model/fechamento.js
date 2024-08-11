const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_SolicitacaoBase = require("./solicitacaoBase");

class SB_Fechamentos extends Model {}

SB_Fechamentos.init(
  {
    id_Fechamentos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataFechamento: DataTypes.DATE,
    SB_HoraFechamento: DataTypes.TIME,
    SB_ServicoAceito: DataTypes.TINYINT,
    SB_HouveFechamento: DataTypes.TINYINT,
    SB_Rede: DataTypes.STRING,
    SB_UltilizouMZ: DataTypes.STRING,
    SB_FechadoPor: DataTypes.STRING,
    SB_HFSMotivo: DataTypes.STRING,
    SB_QTDELigacoes: DataTypes.INTEGER,
    SB_HSNObservacao: DataTypes.STRING,
    SB_HSNMotivo: DataTypes.STRING,
    SB_ManobraWFM: DataTypes.STRING,
    SB_Previsao: DataTypes.TIME,
    SB_HFSObservacaoFechamento: DataTypes.STRING,
    SB_Executante: DataTypes.STRING,
    SB_OFechado: DataTypes.STRING,
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
    modelName: "SB_Fechamentos",
    tableName: "sb_fechamentos",
    timestamps: false,
  }
);

SB_Fechamentos.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_SolicitacaoBase",
  targetKey: "id_SolicitacaoBase",
});
SB_Fechamentos.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_Endereco",
  targetKey: "SB_Endereco_id_Endereco",
});

module.exports = SB_Fechamentos;
