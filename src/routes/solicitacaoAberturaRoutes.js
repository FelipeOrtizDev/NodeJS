const {
  getAllSolicitacoesAbertura,
  createSolicitacaoAbertura,
  updateSolicitacaoAbertura,
  deleteSolicitacaoAbertura,
} = require("../controller/solicitacaoAberturaController");

function solicitacaoAberturaRoutes(server, options, done) {
  server.get("/solicitacoesAbertura", getAllSolicitacoesAbertura);
  server.post(
    "/solicitacoesAbertura/:solicitacaoBaseId",
    createSolicitacaoAbertura
  );
  server.put("/solicitacoes-abertura/:id", updateSolicitacaoAbertura);
  server.delete("/solicitacoes-abertura/:id", deleteSolicitacaoAbertura);
  done();
}

module.exports = solicitacaoAberturaRoutes;
