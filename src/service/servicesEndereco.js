const SB_Endereco = require("../model/Endereco");

class ServiceEndereco {
  getAllEnderecos = async () => {
    try {
      const enderecos = await SB_Endereco.findAll();
      return enderecos;
    } catch (error) {
      throw new Error("Error ao chamar todos o Endereços" + error.message);
    }
  };

  createEndereco = async (data) => {
    try {
      const enderecos = await SB_Endereco.create(data);
      return enderecos;
    } catch (error) {
      throw new Error("Erro ao criar Endereço: " + error.message);
    }
  };

  updateEnderecos = async (id, data) => {
    try {
      const [updated] = await SB_Endereco.update(data, {
        where: { id_Endereco: id },
      });
      if (!updated) {
        throw new Error("Endereço não encontrado");
      }

      const updatedEndereco = await SB_Endereco.findOne({
        where: { id_Endereco: id },
      });
      return updatedEndereco;
    } catch (error) {
      throw new Error("Erro ao atualizar Endereço: " + error.message);
    }
  };

  deleteEndereco = async (id) => {
    try {
      const deleted = await SB_Endereco.destroy({ where: { id_Endereco: id } });
      if (!deleted) {
        throw new Error("Endereço não encontrado");
      }
      return true;
    } catch (error) {
      throw new Error("Erro ao deletar Endereço");
    }
  };
}

module.exports = new ServiceEndereco();
