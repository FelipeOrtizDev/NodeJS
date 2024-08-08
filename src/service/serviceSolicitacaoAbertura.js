const SB_SolicitacaoAbertura = require("../model/solicitacaoAbertura");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

class SolicitacaoAberturaService {
  async getAllSolicitacoesAbertura() {
    try {
      const solicitacoesAbertura = await SB_SolicitacaoAbertura.findAll();
      return solicitacoesAbertura;
    } catch (error) {
      throw new Error(
        "Error fetching all Solicitacoes Abertura: " + error.message
      );
    }
  }

  async createSolicitacaoAbertura(solicitacaoAberturaData) {
    try {
      console.log(
        "Dados recebidos para criação de Solicitacao Abertura",
        solicitacaoAberturaData
      );
      if (!solicitacaoAberturaData.SB_SolicitacaoBase_id_SolicitacaoBase) {
        throw new Error("SB_SolicitacaoBase_id_SolicitacaoBase is required");
      }
      const solicitacaoBase = await SB_SolicitacaoBase.findByPk(
        solicitacaoAberturaData.SB_SolicitacaoBase_id_SolicitacaoBase
      );

      if (!solicitacaoBase) {
        throw new Error("SolicitacaoBase not found");
      }

      return await SB_SolicitacaoAbertura.create(solicitacaoAberturaData);
    } catch (error) {
      console.error(
        "Erro no serviço de criação de Solicitacao Abertura:",
        error.message,
        error.stack
      );
      throw error;
    }
  }

  async updateSolicitacaoAbertura(id, data) {
    try {
      const [updated] = await SB_SolicitacaoAbertura.update(data, {
        where: { id_SolicitacaoAbertura: id },
      });
      if (!updated) {
        throw new Error("Solicitacao Abertura not found");
      }
      const updatedSolicitacaoAbertura = await SB_SolicitacaoAbertura.findOne({
        where: { id_SolicitacaoAbertura: id },
      });
      return updatedSolicitacaoAbertura;
    } catch (error) {
      throw new Error("Error updating Solicitacao Abertura: " + error.message);
    }
  }

  async deleteSolicitacaoAbertura(id) {
    try {
      const deleted = await SB_SolicitacaoAbertura.destroy({
        where: { id_SolicitacaoAbertura: id },
      });
      if (!deleted) {
        throw new Error("Solicitacao Abertura not found");
      }
      return true;
    } catch (error) {
      throw new Error("Error deleting Solicitacao Abertura: " + error.message);
    }
  }
}

module.exports = new SolicitacaoAberturaService();
