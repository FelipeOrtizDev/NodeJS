const Fastify = require("fastify");
const cors = require("@fastify/cors");
const { connectDatabase } = require("./db/database");
const ApiRoutes = require("./routes/ApiRoutes");

const server = Fastify();

const port = 4090;

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const start = async () => {
  try {
    await connectDatabase();
    await ApiRoutes(server);
    server.listen({
      port: port,
      listenTextResolver: (adress) => {
        `O server esta rodandos no ${adress}`;
      },
    });
    console.log(`O servidor esta rodando na porta ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
