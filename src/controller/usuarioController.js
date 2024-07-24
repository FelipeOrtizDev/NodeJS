const servicesUsuario = require("../service/serviceUsuario");

const getAllUsers = async (req, res) => {
  try {
    const usuarios = await servicesUsuario.getAllUsers();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const usuarios = await servicesUsuario.createUser(req.body);
    res.status(201).send(usuarios);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await servicesUsuario.updateUser(id, req.body);
    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(500).send({ massage: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await servicesUsuario.deleteUser(id);
    res.status(200).send({ message: "Usuario deletado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
