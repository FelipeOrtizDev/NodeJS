const ZonaPressao = require("../model/zonaPressao");

exports.getZonasPressao = async () => {
  return await ZonaPressao.findAll();
};
