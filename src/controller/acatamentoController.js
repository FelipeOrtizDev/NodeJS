const SB_SolicitacaoBase = require("../model/solicitacaoBase");
const serviceAcatamento = require("../service/servicesAcatamentos");

const getAllAcatamento = async (req, res) => {
  try {
    const acatamento = await serviceAcatamento.getAllAcatamento();
    res.status(200).send(acatamento);
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Erro buscar Acatamento",
        error: error.message,
        stack: error.stack,
      });
  }
};

const getAcatamentoBySolicitacaoBaseId = async (request, reply) => {
  const { solicitacaoBaseId } = request.params;

  if (!solicitacaoBaseId) {
    return reply.status(400).send({ message: "solicitacaoBaseId is required" });
  }

  try {
    const acatamento = await serviceAcatamento.findBySolicitacaoBaseId(
      solicitacaoBaseId
    );
    if (!acatamento) {
      return reply.status(404).send({ message: "Acatamento not found" });
    }
    return reply.status(200).send(acatamento);
  } catch (error) {
    return reply.status(500).send({
      message: "Erro ao buscar Acatamento",
      error: error.message,
      stack: error.stack,
    });
  }
};

const createAcatamento = async (request, reply) => {
  const { solicitacaoBaseId } = request.params;

  if (!solicitacaoBaseId) {
    return reply.status(400).send({
      message: "solicitacaoBaseId is required",
    });
  }
  const acatamentoData = request.body;
  acatamentoData.SB_SolicitacaoBase_id_SolicitacaoBase = solicitacaoBaseId;
  console.log("Dados do fechamento recebidos:", acatamentoData);
  try {
    const novoAcatamento = await serviceAcatamento.createAcatamento(
      acatamentoData
    );

    await SB_SolicitacaoBase.update(
      { SB_Status: "Acatado" },
      { where: { id_SolicitacaoBase: solicitacaoBaseId } }
    );
    reply.status(201).send(novoAcatamento);
  } catch (error) {
    reply.status(500).send({
      message: "Erro ao criar Acatamento",
      error: error.message,
      stack: error.stack,
    });
  }
};

const updateAcatamento = async (req, res) => {
  const { id } = req.params;
  try {
    const acatamento = await serviceAcatamento.updateAcatamento(id, req.body);
    res.status(201).send(acatamento);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteAcatamento = async (req, res) => {
  const { id } = req.params;
  try {
    await serviceAcatamento.deleteAcatamento(id);
    res.status(200).send({ message: "Usuario deletado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllAcatamento,
  createAcatamento,
  updateAcatamento,
  deleteAcatamento,
  getAcatamentoBySolicitacaoBaseId,
};
