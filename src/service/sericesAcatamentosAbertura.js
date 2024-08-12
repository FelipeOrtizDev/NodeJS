const SB_AcatamentosAbertura = require("../model/acatamentosAbertura");
const SB_SolicitacaoBase = require("../model/solicitacaoBase");

class AcatamentosAberturaService {
  async getAllAcatamentosAbertura() {
    try {
      const acatamentosAbertura = await SB_AcatamentosAbertura.findAll();
      return acatamentosAbertura;
    } catch (error) {
      throw new Error(
        "Error fetching all Acatamentos Abertura: " + error.message
      );
    }
  }
  async getAcatamentoAberturaById(solicitacaoBaseId) {
    const acatamentoAbertura = await SB_AcatamentosAbertura.findOne({
      where: { SB_SolicitacaoBase_id_SolicitacaoBase: solicitacaoBaseId },
    });
    return acatamentoAbertura;
  }

  async createAcatamentosAbertura(acatamentoAberturaData) {
    try {
      console.log(
        "Dados recibidos para criação do Acatamento Abertura no serviço:",
        acatamentoAberturaData
      );
      if (!acatamentoAberturaData.SB_SolicitacaoBase_id_SolicitacaoBase) {
        throw new Error("SB_SolicitacaoBase_id_SolicitacaoBase is required");
      }
      const solicitacaoBase = await SB_SolicitacaoBase.findByPk(
        acatamentoData.SB_SolicitacaoBase_id_SolicitacaoBase
      );
      if (!solicitacaoBase) {
        throw new Error("SolicitacaoBase not found");
      }

      return await SB_AcatamentosAbertura.create(acatamentoAberturaData);
    } catch (error) {
      console.error(
        "Erro no serviço de criação de AcatamentoAbertura:",
        error.message,
        error.stack
      );
      throw error;
    }
  }

  async updateAcatamentosAbertura(id, data) {
    try {
      const [updated] = await SB_AcatamentosAbertura.update(data, {
        where: { id_AcatamentosAbertura: id },
      });
      if (!updated) {
        throw new Error("Acatamentos Abertura not found");
      }
      const updatedAcatamentoAbertura = await SB_AcatamentosAbertura.findOne({
        where: { id_AcatamentosAbertura: id },
      });
      return updatedAcatamentoAbertura;
    } catch (error) {
      throw new Error("Error updating Acatamentos Abertura: " + error.message);
    }
  }

  async deleteAcatamentosAbertura(id) {
    try {
      const deleted = await SB_AcatamentosAbertura.destroy({
        where: { id_AcatamentosAbertura: id },
      });
      if (!deleted) {
        throw new Error("Acatamentos Abertura not found");
      }
      return true;
    } catch (error) {
      throw new Error("Error deleting Acatamentos Abertura: " + error.message);
    }
  }
}

module.exports = new AcatamentosAberturaService();
