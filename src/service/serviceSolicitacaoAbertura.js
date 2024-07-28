const SB_SolicitacaoAbertura = require("../model/solicitacaoAbertura");

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

  async createSolicitacaoAbertura(data) {
    try {
      const solicitacaoAbertura = await SB_SolicitacaoAbertura.create(data);
      return solicitacaoAbertura;
    } catch (error) {
      throw new Error("Error creating Solicitacao Abertura: " + error.message);
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
