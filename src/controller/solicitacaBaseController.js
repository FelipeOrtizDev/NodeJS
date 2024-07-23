const solicitacaoBaseServices = require("../service/servicesSolicitacaoBase");

const getAllSolicitacao = async (req, res) => {
  try {
    const solicitacao = await solicitacaoBaseServices.getAllSolicitacao();
    res.status(200).send(solicitacao);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createSolictacao = async (req, res) => {
  try {
    const solicitacao = await solicitacaoBaseServices.createSolictacao(
      req.body
    );
    res.status(201).send(solicitacao);
  } catch (error) {
    res.status(500).send({ message: error.message });
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
