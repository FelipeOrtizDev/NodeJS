const Polo = require("../model/polo");

exports.getPolos = async (req, res) => {
  try {
    const polos = await Polo.findAll();
    res.status(200).send(polos);
  } catch (error) {
    return res.status(500).send({
      message: "Erro ao buscar Polos",
      error: error.message,
      stack: error.stack,
    });
  }
};
