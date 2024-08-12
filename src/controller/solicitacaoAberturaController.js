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

const getSolicitacaoAberturaById = async (req, res) => {
  const { solicitacaoBaseId } = req.params;
  try {
    const solicitacaoAbertura =
      await SolicitacaoAberturaService.getSolicitacaoAberturaById(
        solicitacaoBaseId
      );
    if (!solicitacaoAbertura) {
      res
        .status(404)
        .send({ message: "Solicitacao de abertura nao encontrada" });
    }
    return res.status(200).send(solicitacaoAbertura);
  } catch (error) {
    console.error("Erro ao Buscar Solicitacao de abertura:", error);
    return reply
      .status(500)
      .send({ message: "Erro ao buscar Solicitacao de abertura", error });
  }
};

const createSolicitacaoAbertura = async (req, res) => {
  const { solicitacaoBaseId } = req.params;

  if (!solicitacaoBaseId) {
    return res.status(400).send({
      message: "solicitacaoBaseId is required",
    });
  }

  const solicitacaoAberturaData = req.body;
  solicitacaoAberturaData.SB_SolicitacaoBase_id_SolicitacaoBase =
    solicitacaoBaseId;
  console.log(
    "Dados do solicitação de Abertura recebidos:",
    solicitacaoAberturaData
  );

  try {
    const novaSolicitacaoAbertura =
      await SolicitacaoAberturaService.createSolicitacaoAbertura(
        solicitacaoAberturaData
      );
    res.status(201).send(novaSolicitacaoAbertura);
  } catch (error) {
    console.error(
      "Erro ao criar Solicitacao Abertura:",
      error.message,
      error.stack
    );
    res.status(500).send({
      message: "Erro ao criar Solicitacao Abertura",
      error: error.message,
      stack: error.stack,
    });
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
  getSolicitacaoAberturaById,
  createSolicitacaoAbertura,
  updateSolicitacaoAbertura,
  deleteSolicitacaoAbertura,
};
