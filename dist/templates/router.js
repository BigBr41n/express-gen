function routes(app) {
    app.get("/api/v1/healthCheck", (req, res) => res.status(200).json("Server is On"));
}
export default routes;
