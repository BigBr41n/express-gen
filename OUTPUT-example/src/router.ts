import { Express } from "express";
function routes(app: Express) {
  app.get("/api/v1/healthCheck", (req, res) =>
    res.status(200).json("Server is On")
  );
}
export default routes;
