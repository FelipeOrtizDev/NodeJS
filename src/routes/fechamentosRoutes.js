const fechamentoController = require("../controller/fechamentosController");

const fechamentosRoutes = async (server) => {
  server.get("/fechamentos/:solicitaoId", fechamentoController.getFechamentos);
  server.post(
    "/fechamentos/:solicitacaoBaseId",
    fechamentoController.createFechamentos
  );
  server.put("/fechamentos/:id", fechamentoController.updateFehchamentos);
  server.delete("/fechamentos/:id", fechamentoController.deleteFechamentos);
};

module.exports = fechamentosRoutes;
