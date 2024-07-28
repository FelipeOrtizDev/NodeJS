const SolicitacaoAberturaService = require("../service/serviceSolicitacaoAbertura");

const getAllSolicitacoesAbertura = async (req, res) => {
  try {
    const solicitacoesAbertura =
      await SolicitacaoAberturaService.getAllSolicitacoesAbertura();
    res.status(200).send(solicitacoesAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createSolicitacaoAbertura = async (req, res) => {
  try {
    const solicitacaoAbertura =
      await SolicitacaoAberturaService.createSolicitacaoAbertura(req.body);
    res.status(201).send(solicitacaoAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateSolicitacaoAbertura = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSolicitacaoAbertura =
      await SolicitacaoAberturaService.updateSolicitacaoAbertura(id, req.body);
    res.status(200).send(updatedSolicitacaoAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteSolicitacaoAbertura = async (req, res) => {
  const { id } = req.params;
  try {
    await SolicitacaoAberturaService.deleteSolicitacaoAbertura(id);
    res
      .status(200)
      .send({ message: "Solicitacao Abertura deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllSolicitacoesAbertura,
  createSolicitacaoAbertura,
  updateSolicitacaoAbertura,
  deleteSolicitacaoAbertura,
};
