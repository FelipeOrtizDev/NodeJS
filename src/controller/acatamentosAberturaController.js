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

const createAcatamentosAbertura = async (req, res) => {
  try {
    const acatamentoAbertura =
      await AcatamentosAberturaService.createAcatamentosAbertura(req.body);
    res.status(201).send(acatamentoAbertura);
  } catch (error) {
    res.status(500).send({ message: error.message });
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
  createAcatamentosAbertura,
  updateAcatamentosAbertura,
  deleteAcatamentosAbertura,
};
