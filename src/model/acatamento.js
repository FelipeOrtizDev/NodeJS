const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_SolicitacaoBase = require("./solicitacaoBase");

class SB_Acatamentos extends Model {}

SB_Acatamentos.init(
  {
    id_Acatamentos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataAcatamento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SB_PrevisaoAcatamento: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    SB_EquipeResponsavel: {
      type: DataTypes.STRING(75),
      allowNull: true,
    },
    SB_ObservacaoAcatamento: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    SB_SolicitacaoBase_id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SB_SolicitacaoBase,
        key: "id_SolicitacaoBase",
      },
    },
    SB_SolicitacaoBase_SB_Enderecos_id_Endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SB_SolicitacaoBase,
        key: "SB_Enderecos_id_Endereco",
      },
    },
  },
  {
    sequelize,
    modelName: "SB_Acatamentos",
    tableName: "SB_Acatamentos",
    timestamps: false,
  }
);

// Define associations between models
SB_Acatamentos.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_id_SolicitacaoBase",
  targetKey: "id_SolicitacaoBase",
});
SB_Acatamentos.belongsTo(SB_SolicitacaoBase, {
  foreignKey: "SB_SolicitacaoBase_SB_Enderecos_id_Endereco",
  targetKey: "SB_Enderecos_id_Endereco",
});

module.exports = SB_Acatamentos;
