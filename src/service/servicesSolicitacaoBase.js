const SB_SolicitacaoBase = require("../model/solicitacaoBase");
const SB_Endereco = require("../model/Endereco");

class ServicesSolicitacaoBase {
  getAllSolicitacao = async () => {
    try {
      const solicitacoes = await SB_SolicitacaoBase.findAll({
        include: [SB_Endereco],
      });
      return solicitacoes;
    } catch (error) {
      throw new Error("Erro ao buscar solicitações base: " + error.message);
    }
  };

  createSolictacao = async (data) => {
    try {
      const enderecoExists = await SB_Endereco.findOne({
        where: {
          id_Endereco: data.SB_Endereco_id_Endereco,
        },
      });

      if (!enderecoExists) {
        throw new Error("O endereço referenciado não existe.");
      }
      const solicitacoes = await SB_SolicitacaoBase.create(data);
      return solicitacoes;
    } catch (error) {
      console.error(
        "Erro no serviço de criação de Solicitacao Base:",
        error.message,
        error.stack
      );
      throw error;
    }
  };

  updateSolicitacao = async (id, data) => {
    try {
      const [updated] = await SB_SolicitacaoBase.update(data, {
        where: {
          id_SolicitacaoBase: id,
        },
      });

      if (!updated) {
        throw new Error("Solicitação base não encontrada");
      }
      const updateSolicitacao = await SB_SolicitacaoBase.findOne({
        where: { id_SolicitacaoBase: id },
      });

      return updateSolicitacao;
    } catch (error) {
      throw new Error("Erro ao atualizar solicitação base: " + error.message);
    }
  };

  deleteSolicitacao = async (id) => {
    try {
      const deleted = await SB_SolicitacaoBase.destroy({
        where: { id_SolicitacaoBase: id },
      });
      if (!deleted) {
        throw new Error("Solicitação base não encontrada");
      }
    } catch (error) {
      throw new Error("Erro ao deletar solicitação base: " + error.message);
    }
  };
}

module.exports = new ServicesSolicitacaoBase();
