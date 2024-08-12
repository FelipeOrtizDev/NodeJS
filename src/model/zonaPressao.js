const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/database");

class ZonaPressao extends Model {}

ZonaPressao.init(
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
    sequelize,
    modelName: "ZonaPressao",
    tableName: "SB_ZonaPressao",
    timestamps: false,
  }
);

module.exports = ZonaPressao;
