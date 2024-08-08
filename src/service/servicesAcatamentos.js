const SB_Acatamentos = require("../model/acatamento");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

class ServiceAcatamento {
  findBySolicitacaoBaseId = async (solicitacaoBaseId) => {
    return await SB_Acatamentos.findOne({
      where: { SB_SolicitacaoBase_id_SolicitacaoBase: solicitacaoBaseId },
    });
  };

  createAcatamento = async (acatamentoData) => {
    try {
      console.log(
        "Dados recebidos para criação do Acatamento no serviço:",
        acatamentoData
      );

      if (!acatamentoData.SB_SolicitacaoBase_id_SolicitacaoBase) {
        throw new Error("SB_SolicitacaoBase_id_SolicitacaoBase is required");
      }

      const solicitacaoBase = await SB_SolicitacaoBase.findByPk(
        acatamentoData.SB_SolicitacaoBase_id_SolicitacaoBase
      );

      if (!solicitacaoBase) {
        throw new Error("SolicitacaoBase not found");
      }
      return await SB_Acatamentos.create(acatamentoData);
    } catch (error) {
      console.error(
        "Erro no serviço de criação de Acatamento:",
        error.message,
        error.stack
      );
      throw error;
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
