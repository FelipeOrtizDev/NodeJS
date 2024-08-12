const {
  getAllAcatamentosAbertura,
  getAcatamentoAberturaById,
  createAcatamentosAbertura,
  updateAcatamentosAbertura,
  deleteAcatamentosAbertura,
} = require("../controller/acatamentosAberturaController");

function acatamentosAberturaRoutes(server, options, done) {
  server.get(
    "/acatamentosAbertura/:solicitacaoBaseId",
    getAcatamentoAberturaById
  );
  server.post(
    "/acatamentosAbertura/:solicitacaoBaseId",
    createAcatamentosAbertura
  );
  server.put("/acatamentos-abertura/:id", updateAcatamentosAbertura);
  server.delete("/acatamentos-abertura/:id", deleteAcatamentosAbertura);
  done();
}

module.exports = acatamentosAberturaRoutes;
