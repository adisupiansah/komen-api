// JSON Server module
const jsonServer = require("json-server");
const cors = require("cors"); // Tambahkan ini
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Tambahkan middleware CORS sebelum router
server.use(cors());

server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

server.use(router);

// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
