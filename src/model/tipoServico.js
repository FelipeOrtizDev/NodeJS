const { sequelize } = require("../db/database");
const { Model, DataTypes } = require("sequelize");

class TipoServico extends Model {}

TipoServico.init(
  {
    id_TipoServico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    SB_Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TipoServico",
    tableName: "SB_TipoServico",
    timestamps: false,
  }
);

module.exports = TipoServico;
