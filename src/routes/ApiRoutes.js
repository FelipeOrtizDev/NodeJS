const enderecoRoutes = require("./EnderecoRoutes");
const solicitacaoBaseRoutes = require("./solicitacaoBaseRoutes");
const fechamentosRoutes = require("./fechamentosRoutes");
const acatamentosRoutes = require("./acatamentoRoutes");
const usuarioRoutes = require("./usuarioRoutes"); // Adicionar rotas de usuário
const solicitacaoAberturaRoutes = require("./solicitacaoAberturaRoutes");
const acatamentosAberturaRoutes = require("./acatamentosAberturasRoutes");
const tipoServicoRoutes = require("./tipoServicoRoutes");
const zonaPressaoRoutes = require("./zonaPressaoRouter");

// Registro das rotas no servidor
const registerRoutes = async (server) => {
  server.register(enderecoRoutes);
  server.register(acatamentosRoutes);
  server.register(solicitacaoBaseRoutes);
  server.register(fechamentosRoutes);
  server.register(usuarioRoutes);
  server.register(solicitacaoAberturaRoutes);
  server.register(acatamentosAberturaRoutes);
  server.register(tipoServicoRoutes);
  server.register(zonaPressaoRoutes);
};

module.exports = registerRoutes;
