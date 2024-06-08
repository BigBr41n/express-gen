import http from "node:http";
import { app } from "./app";
const PORT = process.env.PORT || 3333;
//creating the server
const server = http.createServer(app);
server.keepAliveTimeout = 60000;
server.timeout = 5000;
server.maxHeadersCount = 20;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
server.on("error", (error) => {
    console.error(error);
});
server.on("close", () => {
    console.log("server closed");
});
