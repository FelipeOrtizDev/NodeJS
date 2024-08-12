const {
  getAllAcatamentosAbertura,
  getAcatamentoAberturaById,
  createAcatamentosAbertura,
  updateAcatamentosAbertura,
  deleteAcatamentosAbertura,
} = require("../controller/acatamentosAberturaController");

function acatamentosAberturaRoutes(server, options, done) {
  server.get(
    "/acatamentosAbertura/:solicitacaoAberturaId",
    getAcatamentoAberturaById
  );
  server.post(
    "/acatamentosAbertura/:solicitacaoAberturaId",
    createAcatamentosAbertura
  );
  server.put("/acatamentos-abertura/:id", updateAcatamentosAbertura);
  server.delete("/acatamentos-abertura/:id", deleteAcatamentosAbertura);
  done();
}

module.exports = acatamentosAberturaRoutes;
