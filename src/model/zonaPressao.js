const { Sequelize, DataTypes } = require("sequelize");

const ZonaPressao = Sequelize.define(
  "SB_ZonaPressao",
  {
    id_ZonaPressao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    SB_Descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "SB_ZonaPressao",
    timestamps: false,
  }
);

module.exports = ZonaPressao;
