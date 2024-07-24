const SB_Acatamentos = require("../model/acatamento");
const SB_Fechamentos = require("../model/fechamento");

class ServiceAcatamento {
  getAllAcatamento = async () => {
    try {
      const acatamentos = await SB_Acatamentos.findAll({
        include: [SB_Fechamentos],
      });
      return acatamentos;
    } catch (error) {
      throw new Error("Erro ao buscar acatamento" + error.message);
    }
  };

  createAcatamento = async (data) => {
    try {
      const fechamentosExist = await SB_Fechamentos.findOne({
        where: {
          id_Fechamentos: data.SB_Fechamentos_id_Fechamentos,
          SB_SolicitacaoBase_id_SolicitacaoBase:
            data.SB_Fechamentos_SB_SolicitacaoBase_id_SolicitacaoBase,
          SB_SolicitacaoBase_SB_Enderecos_id_Endereco:
            data.SB_Fechamentos_SB_SolicitacaoBase_SB_Enderecos_id_Endereco,
        },
      });
      if (!fechamentosExist) {
        throw new Error("fechamento referenciado não existe");
      }
      const acatamentos = await SB_Acatamentos.create(data);
      return acatamentos;
    } catch (error) {
      throw new Error("Erro ao criar acatamento" + error.message);
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
      throw new Error("Error ao atualizar acatamento" + error.message);
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
      throw new Error("Erro ao deletar Acamento" + error.message);
    }
  };
}

module.exports = new ServiceAcatamento();
