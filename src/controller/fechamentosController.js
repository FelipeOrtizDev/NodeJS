const fechamentosServices = require("../service/servicesFechamentos");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

const getFechamentos = async (req, res) => {
  try {
    const fechamentos = await fechamentosServices.getFechamentos();
    res.status(200).send(fechamentos);
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar fechamentos", error });
  }
};

const getFechamentosById = async (req, reply) => {
  const { id_SolicitacaoBase } = req.params;
  try {
    const fechamento = await fechamentosServices.getFechamentosById(
      id_SolicitacaoBase
    );
    if (!fechamento) {
      return reply.status(404).send({ message: "Fechamento não encontrado" });
    }
    return reply.status(200).send(fechamento);
  } catch (error) {
    console.error("Erro ao Buscar fechamento:", error);
    return reply
      .status(500)
      .send({ message: "Erro ao buscar fechamento", error });
  }
};

const createFechamentos = async (request, reply) => {
  const { solicitacaoBaseId } = request.params;

  if (!solicitacaoBaseId) {
    return reply.status(400).send({
      message: "solicitacaoBaseId is required",
    });
  }

  const fechamentoData = request.body;
  fechamentoData.SB_SolicitacaoBase_id_SolicitacaoBase = solicitacaoBaseId;
  console.log("Dados do fechamento recebidos:", fechamentoData);

  try {
    const novoFechamentos = await fechamentosServices.createFechamentos(
      fechamentoData
    );

    await SB_SolicitacaoBase.update(
      { SB_Status: "Fechado" },
      { where: { id_SolicitacaoBase: solicitacaoBaseId } }
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
  getFechamentosById,
  createFechamentos,
  updateFehchamentos,
  deleteFechamentos,
};
