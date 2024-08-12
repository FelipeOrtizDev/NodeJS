const zonaPressaoController = require("../controller/zonaPressaoController");

const zonaPressao = async (server, options, done) => {
  server.get("/zonaPressao", zonaPressaoController.getZonaPressao);
  done();
};

module.exports = zonaPressao;
