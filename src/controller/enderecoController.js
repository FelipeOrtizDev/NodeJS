const EnderecoService = require("../service/servicesEndereco");

const getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await EnderecoService.getAllEnderecos();
    res.status(200).send(enderecos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createEndereco = async (req, res) => {
  try {
    const enderecos = await EnderecoService.createEndereco(req.body);
    res.status(201).send(enderecos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateEnderecos = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEndereco = await EnderecoService.updateEnderecos(id, req.body);
    res.status(200).send(updatedEndereco);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteEndereco = async (req, res) => {
  const { id } = req.params;
  try {
    await EnderecoService.deleteEndereco(id);
    res.status(200).send({ message: "Endereço deletado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllEnderecos,
  createEndereco,
  updateEnderecos,
  deleteEndereco,
};
