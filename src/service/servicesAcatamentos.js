const SB_Acatamentos = require("../model/acatamento");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

class ServiceAcatamento {
  getAllAcatamento = async () => {
    try {
      const acatamentos = await SB_Acatamentos.findAll({
        include: [SB_SolicitacaoBase],
      });
      return acatamentos;
    } catch (error) {
      throw new Error("Erro ao buscar acatamentos: " + error.message);
    }
  };

  createAcatamento = async (data) => {
    try {
      const solicitacaoBaseExist = await SB_SolicitacaoBase.findOne({
        where: {
          id_SolicitacaoBase: data.SB_SolicitacaoBase_id_SolicitacaoBase,
          SB_Enderecos_id_Endereco:
            data.SB_SolicitacaoBase_SB_Enderecos_id_Endereco,
        },
      });

      if (!solicitacaoBaseExist) {
        throw new Error("SolicitacaoBase referenciada não existe");
      }

      const acatamento = await SB_Acatamentos.create(data);
      return acatamento;
    } catch (error) {
      throw new Error("Erro ao criar acatamento: " + error.message);
    }
  };

  updateAcatamento = async (id, data) => {
    try {
      const [updated] = await SB_Acatamentos.update(data, {
        where: {
          id_Acatamentos: id,
        },
      });

      if (!updated) {
        throw new Error("Acatamento não encontrado");
      }

      const updatedAcatamento = await SB_Acatamentos.findOne({
        where: {
          id_Acatamentos: id,
        },
      });

      return updatedAcatamento;
    } catch (error) {
      throw new Error("Erro ao atualizar acatamento: " + error.message);
    }
  };

  deleteAcatamento = async (id) => {
    try {
      const deleted = await SB_Acatamentos.destroy({
        where: {
          id_Acatamentos: id,
        },
      });

      if (!deleted) {
        throw new Error("Acatamento não encontrado");
      }

      return true;
    } catch (error) {
      throw new Error("Erro ao deletar acatamento: " + error.message);
    }
  };
}

module.exports = new ServiceAcatamento();
