// src/controllers/municipioController.js
const Municipio = require("../model/municipio");

exports.getMunicipiosByPolo = async (req, res) => {
  try {
    const { id_Polo } = req.params;
    const municipios = await Municipio.findAll({ where: { id_Polo } });
    res.status(200).send(municipios);
  } catch (error) {
    return res.status(500).send({
      message: "Erro ao buscar Municípios",
      error: error.message,
      stack: error.stack,
    });
  }
};
