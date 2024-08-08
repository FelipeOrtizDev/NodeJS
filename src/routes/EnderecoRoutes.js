const enderecoController = require("../controller/enderecoController");
const poloController = require("../controller/poloController");
const municipioController = require("../controller/municipioController");
const setorAbastecimentoController = require("../controller/setorAbastecimentoController");

// Definição das rotas para endereço
const enderecoRoutes = async (server) => {
  server.get("/enderecos", enderecoController.getAllEnderecos);
  server.post("/enderecos", enderecoController.createEndereco);
  server.put("/enderecos/:id", enderecoController.updateEnderecos);
  server.delete("/enderecos/:id", enderecoController.deleteEndereco);
  server.get("/polos", poloController.getPolos);
  server.get("/municipios/:id_Polo", municipioController.getMunicipiosByPolo);
  server.get(
    "/setores/:id_Municipio",
    setorAbastecimentoController.getSetoresByMunicipio
  );
};

module.exports = enderecoRoutes;
