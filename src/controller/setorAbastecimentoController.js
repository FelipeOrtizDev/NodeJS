const SetorAbastecimento = require("../model/setorAbastecimento");

exports.getSetoresByMunicipio = async (req, res) => {
  try {
    const { id_Municipio } = req.params;
    const setores = await SetorAbastecimento.findAll({
      where: { id_Municipio },
    });
    res.status(200).send(setores);
  } catch (error) {
    return res.status(500).send({
      message: "Erro ao buscar Setores de Abastecimento",
      error: error.message,
      stack: error.stack,
    });
  }
};
