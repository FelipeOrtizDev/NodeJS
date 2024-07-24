const enderecoRoutes = require("./EnderecoRoutes");
const solicitacaoBaseRoutes = require("./solicitacaoBaseRoutes");
const fechamentosRoutes = require("./fechamentosRoutes");
const acatamentosRoutes = require("./acatamentoRoutes");
const usuarioRoutes = require("./usuarioRoutes"); // Adicionar rotas de usuário

// Registro das rotas no servidor
const registerRoutes = async (server) => {
  server.register(enderecoRoutes);
  server.register(acatamentosRoutes);
  server.register(solicitacaoBaseRoutes);
  server.register(fechamentosRoutes);
  server.register(usuarioRoutes); // Registrar rotas de usuário
};

module.exports = registerRoutes;