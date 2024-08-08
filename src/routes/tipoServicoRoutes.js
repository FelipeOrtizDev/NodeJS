const tipoServicoController = require("../controller/tipoServicoController");

function tipoServicoRoutes(server, options, done) {
  server.get("/tipoServico", tipoServicoController.getTipoServicos);
  done();
}

module.exports = tipoServicoRoutes;
