const AcatamentosAberturaService = require("../service/sericesAcatamentosAbertura");

const getAllAcatamentosAbertura = async (req, res) => {
  try {
    const acatamentosAbertura =
      await AcatamentosAberturaService.getAllAcatamentosAbertura();
    res.status(200).send(acatamentosAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAcatamentoAberturaById = async (req, res) => {
  const { solicitacaoAberturaId } = req.params;
  try {
    const acatamentoAbertura =
      await AcatamentosAberturaService.getAcatamentoAberturaById(
        solicitacaoAberturaId
      );
    if (!acatamentoAbertura) {
      res
        .status(404)
        .send({ message: "Solicitacao de abertura nao encontrada" });
    }
    return res.status(200).send(solicitacaoAberturaId);
  } catch (error) {
    console.error("Erro ao Buscar Solicitacao de abertura:", error);
    return res
      .status(500)
      .send({ message: "Erro ao buscar Solicitacao de abertura", error });
  }
};
const createAcatamentosAbertura = async (req, res) => {
  const { solicitacaoAberturaId } = req.params;

  if (!solicitacaoAberturaId) {
    return res.status(400).send({
      message: "solicitacaoAberturaId is required",
    });
  }

  const acatamentoAberturaData = req.body;
  acatamentoAberturaData.SB_SolicitacaoAbertura_id_SolicitacaoAbertura =
    solicitacaoAberturaId;
  console.log(" Dados fechamento recebidos: ", acatamentoAberturaData);

  try {
    const novoAcatamentoAbertura =
      await AcatamentosAberturaService.createAcatamentosAbertura(
        acatamentoAberturaData
      );
    res.status(201).send(novoAcatamentoAbertura);
  } catch (error) {
    console.error(
      "Erro ao criar AcatamentoAbertura:",
      error.message,
      error.stack
    );
    res.status(500).send({
      message: "Erro ao criar AcatamentoAbertura",
      error: error.message,
      stack: error.stack,
    });
  }
};

const updateAcatamentosAbertura = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAcatamentoAbertura =
      await AcatamentosAberturaService.updateAcatamentosAbertura(id, req.body);
    res.status(200).send(updatedAcatamentoAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteAcatamentosAbertura = async (req, res) => {
  const { id } = req.params;
  try {
    await AcatamentosAberturaService.deleteAcatamentosAbertura(id);
    res
      .status(200)
      .send({ message: "Acatamentos Abertura deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllAcatamentosAbertura,
  getAcatamentoAberturaById,
  createAcatamentosAbertura,
  updateAcatamentosAbertura,
  deleteAcatamentosAbertura,
};
