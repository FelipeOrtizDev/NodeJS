const acatamentosController = require("../controller/acatamentoController");

// Definição das rotas para acatamentos
const acatamentosRoutes = async (server) => {
  server.get(
    "/acatamentos/:solicitacaoBaseId",
    acatamentosController.getAllAcatamento
  );
  server.post(
    "/acatamentos/:solicitacaoBaseId",
    acatamentosController.createAcatamento
  );
  server.put("/acatamentos/:id", acatamentosController.updateAcatamento);
  server.delete("/acatamentos/:id", acatamentosController.deleteAcatamento);
};

module.exports = acatamentosRoutes;
