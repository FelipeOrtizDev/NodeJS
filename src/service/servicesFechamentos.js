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

  createFechamentos = async (data) => {
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
