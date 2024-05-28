import { Express, NextFunction, Request, Response } from "express";


function routes(app: Express): void {
  app.get("/api/v1/healthCheck", (req: Request, res: Response) =>
    res.status(200).json("Server is On")
  );
}

export default routes;
