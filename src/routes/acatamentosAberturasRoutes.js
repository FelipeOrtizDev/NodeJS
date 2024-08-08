const {
  getAllAcatamentosAbertura,
  createAcatamentosAbertura,
  updateAcatamentosAbertura,
  deleteAcatamentosAbertura,
} = require("../controller/acatamentosAberturaController");

function acatamentosAberturaRoutes(server, options, done) {
  server.get("/acatamentosAbertura", getAllAcatamentosAbertura);
  server.post(
    "/acatamentosAbertura/:solicitacaoAberturaId",
    createAcatamentosAbertura
  );
  server.put("/acatamentos-abertura/:id", updateAcatamentosAbertura);
  server.delete("/acatamentos-abertura/:id", deleteAcatamentosAbertura);
  done();
}

module.exports = acatamentosAberturaRoutes;
