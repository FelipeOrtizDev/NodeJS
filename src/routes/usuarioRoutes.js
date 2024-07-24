const usuarioController = require("../controller/usuarioController");

const usuarioRoutes = async (server) => {
  server.get("/usuarios", usuarioController.getAllUsers);
  server.post("/usuarios", usuarioController.createUser);
  server.put("/usuarios/:id", usuarioController.updateUser);
  server.delete("/usuarios/:id", usuarioController.deleteUser);
};
module.exports = usuarioRoutes;
