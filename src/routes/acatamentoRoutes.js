const acatamentosController = require("../controller/acatamentoController");

// Definição das rotas para acatamentos
const acatamentosRoutes = async (server) => {
  server.get("/acatamentos", acatamentosController.getAllAcatamento);
  server.post("/acatamentos", acatamentosController.createAcatamento);
  server.put("/acatamentos/:id", acatamentosController.updateAcatamento);
  server.delete("/acatamentos/:id", acatamentosController.deleteAcatamento);
};

module.exports = acatamentosRoutes;
