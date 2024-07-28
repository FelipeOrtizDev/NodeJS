const {
  getAllSolicitacoesAbertura,
  createSolicitacaoAbertura,
  updateSolicitacaoAbertura,
  deleteSolicitacaoAbertura,
} = require("../controller/solicitacaoAberturaController");

function solicitacaoAberturaRoutes(server, options, done) {
  server.get("/solicitacoes-abertura", getAllSolicitacoesAbertura);
  server.post("/solicitacoes-abertura", createSolicitacaoAbertura);
  server.put("/solicitacoes-abertura/:id", updateSolicitacaoAbertura);
  server.delete("/solicitacoes-abertura/:id", deleteSolicitacaoAbertura);
  done();
}

module.exports = solicitacaoAberturaRoutes;
