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

  /*   createFechamentos = async (data) => {
    try {
      const solicitacaoBaseExists = await SB_SolicitacaoBase.findOne({
        where: {
          id_SolicitacaoBase: data.SB_SolicitacaoBase_id_SolicitacaoBase,
          SB_Enderecos_id_Endereco:
            data.SB_SolicitacaoBase_SB_Enderecos_id_Endereco,
        },
      });
      if (!solicitacaoBaseExists) {
        throw new Error("A solicitação base referenciada não existe.");
      }

      // Cria o fechamento após verificar as referências
      const fechamento = await SB_Fechamentos.create(data);
      return fechamento;
    } catch (error) {
      throw new Error("Erro ao criar fechamento: " + error.message);
    }
  }; */

  /* createFechamentos = async (fechamentosData) => {
    const solicitacaoBase = await SB_SolicitacaoBase.findByPk(
      fechamentosData.SB_SolicitacaoBase.id_SolicitacaoBase
    );
    if (!solicitacaoBase) {
      throw new Error("SolicitacaoBase not found");
    }
    return await SB_Fechamentos.create(fechamentosData);
  }; */

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
