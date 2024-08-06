const fechamentosServices = require("../service/servicesFechamentos");

const getFechamentos = async (req, res) => {
  try {
    const fechamentos = await fechamentosServices.getFechamentos();
    res.status(200).send(fechamentos);
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar fechamentos", error });
  }
};

const createFechamentos = async (request, reply) => {
  const { solicitacaoBaseId } = request.params;
  const fechamentoData = {
    ...request.body,
    SB_SolicitacaoBase_id_SolicitacaoBase: solicitacaoBaseId,
  };
  try {
    const novoFechamentos = await fechamentosServices.createFechamentos(
      fechamentoData
    );
    reply.status(201).send(novoFechamentos);
  } catch (error) {
    console.error("Erro ao criar Fechamento:", error.message, error.stack);
    reply.status(500).send({
      message: "Erro ao criar Fechamento",
      error: error.message,
      stack: error.stack,
    });
  }
};

const updateFehchamentos = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFechamentos = await fechamentosServices.updateFechamentos(
      id,
      req.body
    );
    res.status(200).send(updatedFechamentos);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o fechamento", error });
  }
};

const deleteFechamentos = async (req, res) => {
  const { id } = req.params;
  try {
    await fechamentosServices.deleteFechamentos(id);
    res.status(200).send({ message: "Fechamento deletado com sucesso" });
  } catch (error) {
    res.status(500).send({ massage: "Erro ao deletar fechamento", error });
  }
};

module.exports = {
  getFechamentos,
  createFechamentos,
  updateFehchamentos,
  deleteFechamentos,
};
