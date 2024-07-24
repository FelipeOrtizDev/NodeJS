const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

class SB_Usuario extends Model {}

SB_Usuario.init(
  {
    id_Usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SB_NomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SB_Perfil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SB_Status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    SB_Unidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SB_Usuario",
    tableName: "SB_Usuario",
    timestamps: false,
  }
);

module.exports = SB_Usuario;
