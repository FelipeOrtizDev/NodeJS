const serviceAcatamento = require("../service/servicesAcatamentos");

const getAllAcatamento = async (req, res) => {
  try {
    const acatamento = await serviceAcatamento.getAllAcatamento();
    res.status(200).send(acatamento);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createAcatamento = async (req, res) => {
  try {
    const acatamento = await serviceAcatamento.createAcatamento(req.body);
    res.status(201).send(acatamento);
  } catch (error) {
    res.status(500).send({ message: error.message });
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
};
