const solicitacaoBaseController = require("../controller/solicitacaBaseController");

// Definição das rotas para solicitação base
const solicitacaoBaseRoutes = async (server) => {
  server.get("/solicitacoes", solicitacaoBaseController.getAllSolicitacao);
  server.post("/solicitacoes", solicitacaoBaseController.createSolictacao);
  server.put("/solicitacoes/:id", solicitacaoBaseController.updateSolicitacao);
  server.delete(
    "/solicitacoes/:id",
    solicitacaoBaseController.deleteSolicitacao
  );
};

module.exports = solicitacaoBaseRoutes;
