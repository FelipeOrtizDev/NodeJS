const SB_Fechamentos = require("../model/fechamento");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

class ServicesFechamentos {
  getFechamentos = async () => {
    try {
      const fechamentos = await SB_Fechamentos.findAll();
      return fechamentos;
    } catch (error) {
      throw new Error(`Erro ao buscar fechamentos ` + error);
    }
  };

  getFechamentosById = async (id_SolicitacaoBase) => {
    const fechamento = await SB_Fechamentos.findOne({
      where: { SB_SolicitacaoBase_id_SolicitacaoBase: id_SolicitacaoBase },
    });
    return fechamento;
  };

  createFechamentos = async (fechamentoData) => {
    try {
      console.log(
        "Dados recebidos para criação do Fechamento no serviço:",
        fechamentoData
      );
      if (!fechamentoData.SB_SolicitacaoBase_id_SolicitacaoBase) {
        throw new Error("SB_SolicitacaoBase_id_SolicitacaoBase is required");
      }
      const solicitacaoBase = await SB_SolicitacaoBase.findByPk(
        fechamentoData.SB_SolicitacaoBase_id_SolicitacaoBase
      );
      if (!solicitacaoBase) {
        throw new Error("SolicitacaoBase not found");
      }
      return await SB_Fechamentos.create(fechamentoData);
    } catch (error) {
      console.error(
        "Erro no serviço de criação de Fechamento:",
        error.message,
        error.stack
      );
      throw error;
    }
  };

  updateFechamentos = async (id, data) => {
    try {
      const [updated] = await SB_Fechamentos.update(data, {
        where: { id_Fechamentos: id },
      });
      if (!updated) {
        throw new Error("Fechamento não encontrado");
      }
      const updatedFechamentos = await SB_Fechamentos.findOne({
        where: { id_Fechamentos: id },
      });
      return updatedFechamentos;
    } catch (error) {
      throw new Error("Erro ao atualizar fechamento: " + error.message);
    }
  };

  deleteFechamentos = async (id) => {
    try {
      const deleted = await SB_Fechamentos.destroy({
        where: { id_Fechamentos: id },
      });
      if (!deleted) {
        throw new Error("Fechamento não encontrado");
      }
      return true;
    } catch (error) {
      throw new Error("Erro ao deletar fechamento: " + error.message);
    }
  };
}

module.exports = new ServicesFechamentos();
