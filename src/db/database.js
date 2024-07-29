const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "Adrijp1729", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao banco", error);
  }
};

module.exports = { sequelize, connectDatabase };
