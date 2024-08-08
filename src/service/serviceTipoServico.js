const TipoServico = require("../model/tipoServico");

exports.getTipoServicos = async () => {
  return await TipoServico.findAll();
};
