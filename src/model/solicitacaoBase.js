const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_Endereco = require("./Endereco");

class SB_SolicitacaoBase extends Model {}

SB_SolicitacaoBase.init(
  {
    id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataSolicitacao: DataTypes.DATE,
    SB_HoraSolicitacao: DataTypes.TIME,
    SB_NumeroOS: DataTypes.STRING,
    SB_TipoServico: DataTypes.STRING,
    SB_Observacoes: DataTypes.STRING,
    SB_Microzona: DataTypes.TINYINT,
    SB_Solicitante: DataTypes.STRING,
    SB_Responsavel: DataTypes.STRING,
    SB_NumeroMZ: DataTypes.INTEGER,
    SB_Motivo: DataTypes.TINYINT,
    SB_Prioridade: DataTypes.STRING,
    SB_Status: DataTypes.STRING,
    SB_Enderecos_id_Endereco: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_Endereco,
        key: "id_Endereco",
      },
    },
  },
  {
    sequelize,
    modelName: "SB_SolicitacaoBase",
    tableName: "SB_SolicitacaoBase",
    timestamps: false,
  }
);

SB_SolicitacaoBase.belongsTo(SB_Endereco, {
  foreignKey: "SB_Enderecos_id_Endereco",
});

module.exports = SB_SolicitacaoBase;
