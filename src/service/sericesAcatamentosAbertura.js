const SB_AcatamentosAbertura = require("../model/acatamentosAbertura");

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

  async createAcatamentosAbertura(data) {
    try {
      const acatamentoAbertura = await SB_AcatamentosAbertura.create(data);
      return acatamentoAbertura;
    } catch (error) {
      throw new Error("Error creating Acatamentos Abertura: " + error.message);
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
