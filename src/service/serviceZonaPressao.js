const ZonaPressao = require("../model/zonaPressao");

const getZonasPressao = async () => {
  return await ZonaPressao.findAll();
};

module.exports = { getZonasPressao };
