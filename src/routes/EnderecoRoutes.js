const enderecoController = require("../controller/enderecoController");

// Definição das rotas para endereço
const enderecoRoutes = async (server) => {
  server.get("/enderecos", enderecoController.getAllEnderecos);
  server.post("/enderecos", enderecoController.createEndereco);
  server.put("/enderecos/:id", enderecoController.updateEnderecos);
  server.delete("/enderecos/:id", enderecoController.deleteEndereco);
};

module.exports = enderecoRoutes;
