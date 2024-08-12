const serviceZonaPressao = require("../service/serviceZonaPressao");

exports.getZonaPressao = async (req, res) => {
  try {
    const zonaPressao = await serviceZonaPressao.getZonasPressao();
    res.status(200).send(zonaPressao);
  } catch (error) {
    res.status(500).send({ messsage: error.messsage });
  }
};
