const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");
const SB_Fechamentos = require("./fechamento");

class SB_Acatamentos extends Model {}

SB_Acatamentos.init(
  {
    id_Acatamentos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_DataAcatamento: DataTypes.DATE,
    SB_PrvisaoAcatamento: DataTypes.TIME,
    SB_EquipeResponsavel: DataTypes.STRING,
    SB_Fechamentos_id_Fechamentos: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_Fechamentos,
        key: "id_Fechamentos",
      },
    },
    SB_Fechamentos_SB_SolicitacaoBase_id_SolicitacaoBase: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_Fechamentos,
        key: "SB_SolicitacaoBase_id_SolicitacaoBase",
      },
    },
    SB_Fechamentos_SB_SolicitacaoBase_SB_Enderecos_id_Endereco: {
      type: DataTypes.INTEGER,
      references: {
        model: SB_Fechamentos,
        key: "SB_SolicitacaoBase_SB_Enderecos_id_Endereco",
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

SB_Acatamentos.belongsTo(SB_Fechamentos, {
  foreignKey: "SB_Fechamentos_id_Fechamentos",
  targetKey: "id_Fechamentos",
});
SB_Acatamentos.belongsTo(SB_Fechamentos, {
  foreignKey: "SB_Fechamentos_SB_SolicitacaoBase_id_SolicitacaoBase",
  targetKey: "SB_SolicitacaoBase_id_SolicitacaoBase",
});
SB_Acatamentos.belongsTo(SB_Fechamentos, {
  foreignKey: "SB_Fechamentos_SB_SolicitacaoBase_SB_Enderecos_id_Endereco",
  targetKey: "SB_SolicitacaoBase_SB_Enderecos_id_Endereco",
});

module.exports = SB_Acatamentos;
