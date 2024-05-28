import http from "node:http";
import app from "./app";
import logger from "./utils/logger";

const PORT = process.env.PORT || 3333;

//creating the server
const server = http.createServer(app);

server.keepAliveTimeout = 60000;
server.timeout = 5000;
server.maxHeadersCount = 20;

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

server.on("error", (error) => {
  logger.error(error);
});

server.on("close", () => {
  logger.info("server closed");
});
