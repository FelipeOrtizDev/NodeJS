const solicitacaoBaseServices = require("../service/servicesSolicitacaoBase");

const getAllSolicitacao = async (req, res) => {
  try {
    const solicitacao = await solicitacaoBaseServices.getAllSolicitacao();
    res.status(200).send(solicitacao);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

/* const createSolictacao = async (req, res) => {
  try {
    const solicitacao = await solicitacaoBaseServices.createSolictacao(
      req.body
    );
    res.status(201).send(solicitacao);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
 */

const createSolictacao = async (req, res) => {
  try {
    const { SB_TipoServico, ...data } = req.body;
    const tipoServico = SB_TipoServico || "Outros";
    const solicitacao = await solicitacaoBaseServices.createSolictacao({
      ...data,
      SB_TipoServico: tipoServico,
    });
    res.status(201).send(solicitacao);
  } catch (error) {
    console.error("Erro ao criar SolicitacaoBase:", error.message, error.stack);
    res.status(500).send({
      message: "Erro ao criar SolicitacaoBase",
      error: error.message,
      stack: error.stack,
    });
  }
};
const updateSolicitacao = async (req, res) => {
  const { id } = req.params;
  try {
    const solicitacao = await solicitacaoBaseServices.updateSolicitacao(
      id,
      req.body
    );
    res.status(200).send(solicitacao);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteSolicitacao = async (req, res) => {
  const { id } = req.params;
  try {
    await solicitacaoBaseServices.deleteSolicitacao(id);
    res.status(200).send({ message: "Solicitação base deletada com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllSolicitacao,
  createSolictacao,
  updateSolicitacao,
  deleteSolicitacao,
};
