const tipoServicoService = require("../service/serviceTipoServico");

exports.getTipoServicos = async (req, res) => {
  try {
    const tipoServicos = await tipoServicoService.getTipoServicos();
    res.status(200).send(tipoServicos);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao buscar tipo do servico",
      error: error.message,
      stack: error.stack,
    });
  }
};
