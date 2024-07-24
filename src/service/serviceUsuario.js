const { Where } = require("sequelize/lib/utils");
const SB_Usuario = require("../model/usuario");

class ServicesUsuario {
  getAllUsers = async () => {
    try {
      const usuarios = await SB_Usuario.findAll();
      return usuarios;
    } catch (error) {
      throw new Error("Erro ao buscar usuarios" + error.message);
    }
  };

  createUser = async (data) => {
    try {
      const usuarios = await SB_Usuario.create(data);
      return usuarios;
    } catch (error) {
      throw new Error("Erro ao criar usuario" + error.message);
    }
  };

  updateUser = async (id, data) => {
    try {
      const [updated] = await SB_Usuario.update(data, {
        where: { id_Usuario: id },
      });
      if (!updated) {
        throw new Error("Usuario não encontrado");
      }
      const updatedUser = await SB_Usuario.findOne({
        where: { id_Usuario: id },
      });
      return updatedUser;
    } catch (error) {
      throw new Error("Erro ao atualizar o usuario" + error.message);
    }
  };

  deleteUser = async (id) => {
    try {
      const deleted = await SB_Usuario.destroy({ where: { id_Usuario: id } });
      if (!deleted) {
        throw new Error("Usuario não encontrado");
      }
      return true;
    } catch (error) {
      throw new Error("Erro ao criar usuario" + error.message);
    }
  };
}

module.exports = new ServicesUsuario();
