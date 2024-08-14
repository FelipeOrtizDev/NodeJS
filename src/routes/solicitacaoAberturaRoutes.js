const {
  getAllSolicitacoesAbertura,
  getSolicitacaoAberturaById,
  createSolicitacaoAbertura,
  updateSolicitacaoAbertura,
  deleteSolicitacaoAbertura,
} = require("../controller/solicitacaoAberturaController");

function solicitacaoAberturaRoutes(server, options, done) {
  server.get(
    "/solicitacaoAbertura/:solicitacaoBaseId",
    getSolicitacaoAberturaById
  );
  server.post(
    "/solicitacaoAbertura/:solicitacaoBaseId",
    createSolicitacaoAbertura
  );
  server.put("/solicitacaoAbertura/:id", updateSolicitacaoAbertura);
  server.delete("/solicitacaoAbertura/:id", deleteSolicitacaoAbertura);
  done();
}

module.exports = solicitacaoAberturaRoutes;
